import React from "react";
import { Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Navbar from "./pages/others/Navbar";
import Landing from "./pages/LandingPage";
import Courses from "./pages/Courses";
// import ViewCourse from "./pages/ViewCourse";
import Register from "./pages/Register";
import AboutUsPage from "./pages/Aboutus";
import Dashboard from "./pages/Admin";


const RouteApp = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/nav" element={<Navbar/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/courses" element={<Courses/>}/>
            {/* <Route path="/viewcourse" element={<ViewCourse/>}/> */}
            <Route path="/register" element={<Register/>}/>
            <Route path="/ouracademy" element={<AboutUsPage/>}/>
            <Route path="/admin" element={<Dashboard/>}/>
        </Routes>
    );
}

export default RouteApp;