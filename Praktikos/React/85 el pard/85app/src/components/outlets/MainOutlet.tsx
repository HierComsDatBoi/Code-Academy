import { Outlet } from "react-router-dom";
import Header from "../UI/Header";

const MainOutlet = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainOutlet;