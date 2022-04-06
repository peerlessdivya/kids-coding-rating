import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "../sidebar";
import { AccountCircle, Dashboard } from "@mui/icons-material";

const User = () => {


  const sidebarOptions = [
    {
      title : 'Profile',
      icon : <AccountCircle />,
      link : '/user/profile'
      },
      {
        title : 'Dashboard',
        icon : <Dashboard />,
        link : '/user/dashboard'
        }
  ]
  return (
    <>
      <Sidebar sidebarOptions = {sidebarOptions}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default User;
