import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import './App.css';
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import User from "./components/user";
import Vender from "./components/vender";
import AddPlatform from "./components/vender/addPlatform";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login/>} path = "login"/>
             <Route element={<Signup/>} path ="signup"/>
             
             </Route>
            

          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            
          </Route> 


          <Route element={<User/>} path="user">
            <Route element={<Dashboard/>} path = "dashboard"/>
            </Route>

            <Route element={<Vender/>} path="vender">
             <Route element={<AddPlatform/>} path="addPlatform"/>

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
