import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="border">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <Link to={"entry"}>Entry</Link>
    </ul>
  );
};

export default NavBar;
