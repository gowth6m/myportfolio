import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink className="navigation flex" to={"/"}>
        <ul className="">
          <li>
            <Link to={"/"} className="">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} className="">
              About
            </Link>
          </li>
          <li>
            <Link to={"/portfolio"} className="">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to={"/"} className="">
              Contact
            </Link>
          </li>
        </ul>
      </NavLink>
    </>
  );
}

export default Navbar;
