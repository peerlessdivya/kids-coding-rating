import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Dashboard from "./dashboard";

const Vender = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
      
    </>
  );
};

export default Vender;