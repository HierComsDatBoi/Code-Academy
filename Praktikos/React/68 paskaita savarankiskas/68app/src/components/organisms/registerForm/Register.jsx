import { useState } from "react";

import Input from "../../atoms/input/input";
import InputField from "../../molecules/InputField";

const RegisterForm = () => {

  const [error, setError] = useState('')
  const [formInputs, setFormInputs] = useState({
    userName: '',
    userPass: '',
    userPassRepeat: ''
  });

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(Object.keys(formInputs));

    if(Object.keys(formInputs).some(val => formInputs[val] === '')){
      setError('Empty fields');
    } else if(formInputs.userPass !== formInputs.userPassRepeat){
      setError('Passwords dont match');
    } else setError('Registration sukesful');;
  }

  const onChangeFunction = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  }
  //e.target.name nusistato formInputs reiksmes


  return (
  <>
    <form onSubmit={formSubmit}>
      <InputField
        type="text"
        name="userName"
        id="userName"
        placeholder="User Name..."
        value={formInputs.userName}
        onChangeFunction={onChangeFunction}
        text="User Name: "
      />
      <InputField
        type="password"
        name="userPass"
        id="userPass"
        placeholder="Password..."
        value={formInputs.userPass}
        onChangeFunction={onChangeFunction}
        text="Password"
      />
      <InputField
        type="password"
        name="userPassRepeat"
        id="userPassRepeat"
        placeholder="Password Repeat..."
        value={formInputs.userPassRepeat}
        onChangeFunction={onChangeFunction}
        text="Password Repeat: "
      />
      <Input
        type="submit"
        value="Register"
      />
    </form>
    {<p>{error}</p>}
  </>
  );
}

export default RegisterForm;