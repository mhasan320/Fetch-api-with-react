/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ul className=" flex">
      <li>
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link className="mr-5" to={`/BeautifulAreas/1`}>
          Area
        </Link>
      </li>
    </ul>
  );
}
