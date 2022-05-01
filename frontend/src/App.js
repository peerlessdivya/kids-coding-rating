import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import "./App.css";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Admin from "./components/admin";
import User from "./components/user";
import AddPlatform from "./components/admin/addPlatform";
import BrowsePLatform from "./components/main/browsePlatform";
import ManagePlatform from "./components/admin/managePlatform";
import AdminDashboard from "./components/admin/dashboard";
import UserDashboard from "./components/user/dashboard";
import UserProfile from "./components/user/profile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<BrowsePLatform />} path="browsePlatform" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
            <Route element={<AddPlatform />} path="addplatform" />
            <Route element={<ManagePlatform />} path="managePlatform" />
            <Route element={<UserProfile />} path="profile" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="dashboard" />
            <Route element={<UserProfile />} path="profile" />
          </Route>

          <Route element={<Navigate to="/main/home" />} path="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
