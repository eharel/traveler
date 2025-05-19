import styles from "./Sidebar.module.css";
import AppNavBar from "../NavComponents/AppNavBar/AppNavBar";
import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <AppNavBar />
      <Outlet />
    </div>
  );
}

export default Sidebar;
