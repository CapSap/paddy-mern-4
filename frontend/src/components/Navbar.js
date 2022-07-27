import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="border">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"entry"}>Entry</Link>
      </li>
      <li>
        <Link to={"ecomm"}>Seven Hills/Ecomm view</Link>
      </li>
    </ul>
  );
};

export default NavBar;
