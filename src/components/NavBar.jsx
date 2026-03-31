import { ShoppingBag, ShoppingCart } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <NavLink
          to="shop"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.navlink}`
              : `${styles.navlink}`
          }
        >
          <ShoppingBag className={styles.icon} />
        </NavLink>
        <NavLink
          to="checkout"
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.navlink}`
              : `${styles.navlink}`
          }
        >
          <ShoppingCart className={styles.icon} />
        </NavLink>
      </nav>
    </>
  );
}
