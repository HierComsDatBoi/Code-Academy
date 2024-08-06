import InputField from "../../molecules/InputField/InputField";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import { useState } from "react";

const RegisterForm = () => {
  const [formInputs, setFormInputs] = useState({
    userName: ""
  });
  const onChangeF = () => {
    
  }
  return ( 
    <form>
      <InputField 
      text="User Name: "
      type="text"
      name="userName"
      id="userName"
      placeholderText="Enter your User Name..."
      value={formInputs.userName}
      onChangeF={onChangeF}
      />
      <InputField 
      type="text"
      text="Email: "
      name="email"
      id="email"
      placeholderText="Enter your Email..."
      />
    </form>
   );
}
 
export default RegisterForm;