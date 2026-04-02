import { ShoppingBag, ShoppingCart } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ idsInCart }) {
  console.log(`Navbar: ${idsInCart.length}, ${idsInCart}`);
  return (
    <>
      <nav>
        <Link to="/" className={styles.navlink}>
          Home
        </Link>
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
          {idsInCart.length > 0 && (
            <div className={styles.badge}>{idsInCart.length}</div>
          )}
        </NavLink>
      </nav>
    </>
  );
}
