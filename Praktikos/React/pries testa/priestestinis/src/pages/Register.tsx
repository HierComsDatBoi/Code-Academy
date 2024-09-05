import { useState } from "react";
import * as z from "zod";

const Register = () => {
  const schema = z.object({
    username: z
      .string()
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must not exceed 20 characters"),
    userEmail: z.string().email("Invalid email. Please enter a valid email address."),
    pass: z
      .string()
      .min(3, "Password must be at least 3 characters")
      .max(16, "Password must not exceed 16 characters"),
    passRepeat: z.string(),
  }).refine((data) => data.pass === data.passRepeat, {
    path: ["passRepeat"],
    message: "Passwords do not match",
  });

  const [inputValues, setInputValues] = useState({
    username: '',
    userEmail: '',
    pass: '',
    passRepeat: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const HandleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const result = schema.safeParse(inputValues);
    
    if (!result.success) {

      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Record<string, string>);
      return;
    }

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(inputValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Sukses");
        setErrors({});
      })
      .catch((error) => {
        console.log("Fail");
      });
  };

  return (
    <section>
      <h2>Register</h2>

      <form onSubmit={HandleSubmitEvent}>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username" 
            id="username"
            value={inputValues.username}
            onChange={HandleInputChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="userEmail">Email: </label>
          <input 
            type="email" 
            name="userEmail" 
            id="userEmail"
            value={inputValues.userEmail}
            onChange={HandleInputChange}
          />
          {errors.userEmail && <p>{errors.userEmail}</p>}
        </div>

        <div>
          <label htmlFor="pass">Password: </label>
          <input 
            type="password" 
            name="pass" 
            id="pass"
            value={inputValues.pass}
            onChange={HandleInputChange}
          />
          {errors.pass && <p>{errors.pass}</p>}
        </div>

        <div>
          <label htmlFor="passRepeat">Password Repeat: </label>
          <input 
            type="password" 
            name="passRepeat" 
            id="passRepeat"
            value={inputValues.passRepeat}
            onChange={HandleInputChange}
          />
          {errors.passRepeat && <p>{errors.passRepeat}</p>}
        </div>

        <input type="submit" value="Register" />
      </form>
    </section>
  );
}

export default Register;
