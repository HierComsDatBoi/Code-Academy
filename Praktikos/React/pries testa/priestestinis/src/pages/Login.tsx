import { useState, useEffect } from "react";

type UserTypes = {
  id?: string;
  username: string;
  pass: string;
  logedIn?: boolean;
};

const Login = () => {
  const [inputValues, setInputValues] = useState({
    id: '',
    username: '',
    pass: '',
    logedIn: false
  });

  const [users, setUsers] = useState<UserTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  };

  const HandleSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValues.username || !inputValues.pass) {
      setError('Please fill in both fields');
      return;
    }
    console.log(users);

    const findUser = users.find((user) => user.username.toLowerCase() === inputValues.username && user.pass === inputValues.pass);

    if (findUser) {
      console.log('Login successful');
      console.log(findUser);
      setError(null);
    } else {
      console.log("notOk");
      setError('Invalid username or password');
    }

  };

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then((data) => setUsers(data))
}, []);

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={HandleSubmitEvent}>
        {error && <p>{error}</p>}

        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            value={inputValues.username}
            onChange={HandleInputChange}
          />
        </div>

        <div>
          <label htmlFor="pass">Password: </label>
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Password..."
            value={inputValues.pass}
            onChange={HandleInputChange}
          />
        </div>

        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
