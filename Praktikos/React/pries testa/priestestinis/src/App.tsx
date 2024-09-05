import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/header/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route>


        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      </main>
    </>
  );
}

export default App;
