import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";
import AppNav from "../navbar/AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />

      {/* to display a child route*/}
      <AppNav />

      {/* to display nested routes in a parents components */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
