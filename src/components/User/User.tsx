import { useAuth } from "../../contexts/FakeAuth";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user?.avatar} alt={user?.name} />
      <span>Welcome, {user?.name}</span>
      <button className={styles.logout} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default User;
