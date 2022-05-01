import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "./header";
import { AccountCircle, Dashboard } from "@mui/icons-material";

const admin = () => {
  const sidebarOptions = [
    {
      title: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      title: "Add New Platform",
      icon: <Dashboard />,
      link: "/admin/addplatform",
    },
    {
      title: "Manage Platforms",
      icon: <Dashboard />,
      link: "/admin/managePlatform",
    },
  ];

  return (
    <>
      <Sidebar sidebarOptions={sidebarOptions}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default admin;
