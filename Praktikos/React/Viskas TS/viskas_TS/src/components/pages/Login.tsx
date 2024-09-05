import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: ""
  })

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValues({...inputValues,
      [event.target.name]: event.target.value
    });
  }

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
  }


  return ( 
    <section>
    <h2>Login</h2>

    <form onSubmit={HandleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" 
        value={inputValues.username}
        onChange={HandleInputChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"
        value={inputValues.password}
        onChange={HandleInputChange}
        />
      </div>
      <input type="submit" value="Login" />
    </form>



    <NavLink to="/register">Create account</NavLink>
    </section>
   );
}
 
export default Login;


//import userscontext ir tipa
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
