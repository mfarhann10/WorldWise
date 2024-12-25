import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="flex gap-5 mb-3 justify-between text-2xl bg-red-400">
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
