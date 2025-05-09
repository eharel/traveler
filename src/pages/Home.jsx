import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Traveler</h1>
      <Link to="/app">To the app</Link>
    </div>
  );
}

export default Home;
