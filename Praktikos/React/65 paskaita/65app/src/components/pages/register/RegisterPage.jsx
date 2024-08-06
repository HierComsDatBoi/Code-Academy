import Heading from "../../atoms/Heading/Heading";
import RegisterForm from "../../organism/registerForm/RegisterForm";

const RegisterPage = () => {
  return ( 
    <section>
      <Heading
      size={2}
      text="register form"
      />
      <RegisterForm />
    </section>
   );
}
 
export default RegisterPage;