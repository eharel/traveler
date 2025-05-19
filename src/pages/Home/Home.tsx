import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useAuth } from "../../contexts/FakeAuth";
import Button from "../../components/Buttons/Button/Button";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleStartAdventure = () => {
    if (isAuthenticated) {
      navigate("/app");
    } else {
      navigate("/login");
    }
  };

  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Button type="primary" onClick={handleStartAdventure}>
          Start your adventure
        </Button>
      </section>
    </main>
  );
}
