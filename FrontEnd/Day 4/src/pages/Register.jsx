import React from "react";
import "../assets/css/Register.css"
import Navbar from "./others/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const nav = useNavigate('');
    return(
        <>
            <Navbar/>
            <div className="register-container">
            <h2>Course Registration Form</h2>
            <form action="#" method="post">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" required className="register-input"/>

                <label htmlFor="age">Age</label>
                <input type="tel" id="age" name="age" required className="register-input"/>

                <label htmlFor="gender">Select Gender:</label>
                <select id="gender" name="gender" required className="register-input-select">
                    <option value="">-- Select Gender --</option>
                    <option value="gender1">Male</option>
                    <option value="gender2">Female</option>
                </select>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required className="register-input"/>

                <label htmlFor="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" required className="register-input"/>


                <label htmlFor="course">Select Course:</label>
                <select id="course" name="course" required className="register-input-select">
                    <option value="">-- Select Course --</option>
                    <option value="course1">Beginner Course</option>
                    <option value="course2">Intermediate Course</option>
                    <option value="course3">Pro Course</option>
                </select>

                <label htmlFor="address">Residential Address:</label>
                <input type="text" id="address" name="address" required className="register-input"/>

                <input type="submit" value="Register" className="register-input-btn" onClick={()=>nav('/courses')}/>
            </form>
        </div>

        </>
    );
}
export default Register;