import { Outlet } from "react-router-dom";
import Header from "../../UI/header/Header";

const BaseOutlet = () => {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    </>
  );
}
 
export default BaseOutlet;