import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";
import AppNav from "../navbar/AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />

      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
