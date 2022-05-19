import AvatarList from "../AvatarList";

function Position({ position }) {
  return (
    <>
      {position.name}
      <div>
        <AvatarList />
      </div>
    </>
  );
}

export default Position;
