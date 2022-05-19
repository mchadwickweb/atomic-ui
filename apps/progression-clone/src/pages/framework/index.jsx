import { useQuery } from "react-query";
import Discipline from "../../components/Discipline";

function fetchDisciplines() {
  return [
    {
      id: 1,
      name: "User Reseach",
      positions: [
        {
          id: 1,
          name: "Associate User Reseach",
          code: "UR1",
          people: [
            {
              id: 1,
              name: "Michael",
            },
          ],
        },
        {
          id: 2,
          name: "User Reseach",
          code: "UR2",
          people: [
            {
              id: 2,
              name: "Lois",
            },
            {
              id: 3,
              name: "Bob",
            },
          ],
        },
        {
          id: 3,
          name: "Senior User Reseach",
          code: "UR3",
          people: [
            {
              id: 4,
              name: "Sally",
            },
          ],
        },
        {
          id: 4,
          name: "Lead User Reseach",
          code: "UR4",
          people: [
            {
              id: 5,
              name: "Tom",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Product Designer",
      positions: [
        {
          id: 1,
          name: "Associate Product Designer",
          code: "PD1",
          people: [],
        },
        {
          id: 2,
          name: "Product Designer",
          code: "PD2",
          people: [
            {
              id: 6,
              name: "Bob",
            },
          ],
        },
        {
          id: 3,
          name: "Senior Product Designer",
          code: "PD3",
          people: [
            {
              id: 7,
              name: "Tim",
            },
          ],
        },
        {
          id: 4,
          name: "Lead Product Designer",
          code: "PD4",
          people: [
            {
              id: 8,
              name: "Ellie",
            },
          ],
        },
      ],
    },
  ];
}

function FrameworkPage() {
  /**
   * Top level query on the container/page component.
   *
   * This could be abstracted away easily enough into its own
   * custom hook
   */
  const { isLoading, isError, data, error } = useQuery(
    "disciplines",
    fetchDisciplines
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  /**
   * Focusing on rendering UI only components
   */
  return (
    <>
      <h1>Framework</h1>
      {data.map((discipline) => {
        return <Discipline key={discipline.id} discipline={discipline} />;
      })}
    </>
  );
}

export default FrameworkPage;
