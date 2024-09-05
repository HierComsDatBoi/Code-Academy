import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="/cards">Cards</NavLink>
      </nav>
      <div>
        <Link to="register">
          <button>Register</button>
        </Link>
        <Link to="login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;