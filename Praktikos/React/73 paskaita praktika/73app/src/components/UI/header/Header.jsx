import { NavLink, Link } from 'react-router-dom';
import logo from "../../../media/logo.png"

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img
          src={logo}
          alt="Logo" />
      </div>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cards"}>Cards</NavLink>
      </nav>
      <div className="userInfo">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </header>
  );
}

export default Header;