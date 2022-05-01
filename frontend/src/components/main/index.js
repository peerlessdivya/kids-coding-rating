import { AccountCircle, Dashboard } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import Header from "./header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
