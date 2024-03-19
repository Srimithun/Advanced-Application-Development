import React from "react";
import "../assets/css/ViewCourse.css";
import Navbar from "./others/Navbar";
import course1 from '../assets/Images/course1.png';
import { useNavigate } from "react-router-dom";

const ViewCourse  = ({ handlePopup }) => {
    const nav = useNavigate('');
    return (
        <>
            <div className="vc-body">
            <div className="vc-container">
                <div className="vc-imgBox">
                    <img src={course1} alt="course1" />
                </div>
                    <div className="vc-details">
                        <i className="bx bx-x" onClick={handlePopup}></i>
                        <div className="vc-contnet">
                            <h2>BEGGINNER COURSE</h2><br />
                            <span>XYZ University</span><br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><br />
                            <h3>INR.9999</h3><br />
                            <button onClick={()=>nav('/register')}>Register Course</button>
                        </div>
                    </div>
                </div>
                </div>

        </>
    );
}
export default ViewCourse;