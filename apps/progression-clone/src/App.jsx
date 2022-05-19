import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <h1>Progression</h1>
      <Link to="/framework">Framework</Link>{" "}
      <Link to="/positions">Positions</Link>
      <Outlet />
    </main>
  );
}

export default App;
