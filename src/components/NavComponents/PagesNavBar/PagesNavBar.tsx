import { NavLink, Outlet } from "react-router-dom";
import styles from "./PagesNavBar.module.css";
import Logo from "../../Logo/Logo";
import { useAuth } from "../../../contexts/FakeAuth";

function PagesNavBar() {
  const { isAuthenticated } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
      <Outlet />
    </nav>
  );
}

export default PagesNavBar;
