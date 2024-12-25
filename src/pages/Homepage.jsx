import { Link } from "react-router-dom";
import PageNav from "../components/navbar/PageNav";
import AppNav from "../components/navbar/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <Link to="/app" className="text-xl">
        App
      </Link>
      <h1 className="text-7xl mb-2">WorldWise</h1>
    </div>
  );
}

export default Homepage;
