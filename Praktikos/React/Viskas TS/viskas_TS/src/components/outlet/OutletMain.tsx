import Header from "../UI/Header";
import { Outlet } from "react-router-dom";

const OutletMain = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default OutletMain;