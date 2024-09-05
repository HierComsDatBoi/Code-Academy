import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Cards from "./components/pages/Cards";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import OutletMain from "./components/outlet/OutletMain";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register />} ></Route>
      <Route element={<OutletMain/>}>
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards/>}/>
      </Route>
    </Routes>
  );
}

export default App;
