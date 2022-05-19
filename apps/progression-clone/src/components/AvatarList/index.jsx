import { useQuery } from "react-query";
/**
 * As avatars are nested in the UI you could look at this as an oppoutunity
 * to break it out into a seperate API call along with other CRUD actions.
 *
 * This fetch will cache as well.
 */

async function fetchAvatars() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?limit=3"
  );
  return response.json();
}

function AvatarList() {
  const { isLoading, isError, data } = useQuery("avatars", fetchAvatars);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data
        ? data.map((person) => {
            return <li key={person.id}>{person.name}</li>;
          })
        : null}
      <li>
        <button type="button">+</button>
      </li>
    </ul>
  );
}

export default AvatarList;
