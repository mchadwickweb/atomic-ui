import PositionsList from "../PositionsList";

function Discipline({ discipline }) {
  return (
    <>
      <h2>{discipline.name}</h2>
      <PositionsList roles={discipline.roles} />
    </>
  );
}

export default Discipline;
