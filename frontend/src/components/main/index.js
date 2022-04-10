import { AccountCircle, Dashboard } from "@mui/icons-material";
import { Outlet } from "react-router-dom";



import Header from "./header";


const Main = () => {

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
      <Header />
      <Outlet />
      {/* <Footer /> */}
      
        
      
    </>
  );
};

export default Main;