import Position from "../../components/Position";

const dummyRole = {
  id: 2,
  name: "User Reseach",
  code: "UR2",
};

function PositionsPage() {
  return (
    <div>
      <Position position={dummyRole} />
    </div>
  );
}

export default PositionsPage;
