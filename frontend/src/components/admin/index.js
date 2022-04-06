import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "./header";
import { AccountCircle,Dashboard } from "@mui/icons-material";


const admin = () => {
  const sidebarOptions = [
    {
      title : 'Profile',
      icon : <AccountCircle/>,
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

export default admin;