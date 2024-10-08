import { Link } from 'react-router-dom';


const Header = () => {
  return ( 
    <>
      <header>
      <nav>
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/shop' >Shuopas</Link>
      <Link to='/error' >Error</Link>
      </nav>
    </header>
    </>
   );
}
 
export default Header;