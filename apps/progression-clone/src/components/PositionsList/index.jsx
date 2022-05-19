import AvatarList from "../AvatarList";

function PositionsList({ positions }) {
  return (
    <ul>
      {positions.map((position) => {
        return (
          <li key={position.id}>
            {position.name}
            <div>
              <AvatarList />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PositionsList;
