import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {v4 as generateID} from 'uuid';

const Register = () => {

  const [inputValues, setInputValues] = useState({
    id: generateID(),
    username: '',
    password: '',
    passwordRepeat: ''
  });

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  }

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
    if(inputValues.password === inputValues.passwordRepeat){




    } else {alert("Slaptazodziai nesutampa")}
  }


  return (
    <>
      <h2>Register</h2>
      <form onSubmit={HandleSubmit}>

        <div>
          <label htmlFor="username">Username: </label>
          <input type="text"
            name="username" id="username"
            value={inputValues.username}
            onChange={HandleInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password"
            name="password" id="password"
            value={inputValues.password}
            onChange={HandleInputChange}
          />
        </div>

        <div>
          <label htmlFor="passwordRepeat">Username: </label>
          <input type="password"
            name="passwordRepeat" id="passwordRepeat"
            value={inputValues.passwordRepeat}
            onChange={HandleInputChange}
          />
        </div>
        <input type="submit" value='Register'/>
      </form>
      <NavLink to="/login">Already have acount? Login here</NavLink>
    </>
  );
}

export default Register;