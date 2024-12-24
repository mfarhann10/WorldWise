import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="flex  gap-2 mb-5">
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
