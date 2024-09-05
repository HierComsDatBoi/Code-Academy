import { Routes, Route } from "react-router-dom"
import MainOutlet from "./components/outlets/MainOutlet";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MainOutlet />} >
          <Route index element={<Home />} />
          <Route path="shop">
            <Route index element={<Shop/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
