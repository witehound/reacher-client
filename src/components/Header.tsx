import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


const Header = ({ setUser , user} : any) => {
  return <header className="header">
    <div className="logo">
      <Link to="/">
        GoalSetter
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/login">
          <FaSignInAlt/> Login
        </Link>
      </li>
      <li>
        <Link to="/signup">
          <FaUser/> Register
        </Link>
      </li>
    </ul>
  </header>;
};

export default Header;
