import { useEffect, useState } from "react";
import io from 'socket.io-client';

const socket = io.connect(`http://localhost:5500`);

const App = () => {

  const [formInput, setFormInput] = useState('');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive', (data) => {
      setMessages([...messages, data.formInput]);
      console.log(data);
    });
  }, [socket]);

  const formSubmit = (e) => {
    e.preventDefault();
    socket.emit("send", { formInput });
    setMessages([...messages, formInput]);
    setFormInput('');
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          type="text" placeholder="Message..."
          value={formInput}
          onChange={(e) => { setFormInput(e.target.value) }}
        />
        <input type="submit" value="Send" />

      </form>

      <div>
        {
          messages.map((message, i) => <p key={i}>{message}</p>)
        }
      </div>
    </>
  );
}

export default App;