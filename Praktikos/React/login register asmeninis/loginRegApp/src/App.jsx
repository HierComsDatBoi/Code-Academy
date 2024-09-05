import { Routes, Route } from "react-router-dom";

import './App.css';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <nav> 
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </nav>
  );
}

export default App;
