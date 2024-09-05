import { Link } from "react-router-dom";


const Home = () => {
  return (
<>
<div className="home">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </div>
<div className="users">
<h3>Registered users</h3>
</div>
</>
  );
}
 
export default Home