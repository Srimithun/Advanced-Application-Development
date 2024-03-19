import React from "react";
import "../assets/css/LandingPage.css"
import chess1 from '../assets/Images/chess1.png';
import chess2 from '../assets/Images/chess2.png';
import Navbar from "./others/Navbar";
import Footer from "./others/Footer";
import { useNavigate } from "react-router-dom";

const Landing=() =>{
    const nav = useNavigate('');
    return(
        <>
        <Navbar/>

        <section className="landing-container">
            <div className="landing-content__container">
                <h1>
                    The Best Chess Academy <br></br>
                    <span className="heading__1">Chess Learning Platform</span><br></br>
                    <span className="heading__2">for all Sharp Minds</span>
                </h1>  
                <p>

                    "Master the art of strategy and conquer the board at our Chess Academy: Where Minds Clash and Kings Rise!"

                </p>

                <form>
                    <input type="text" placeholder="Search Course level Ex:Beginner,Pro"/>
                    <button type="submit" onClick={()=>nav('/courses')}>Search Course</button>
                </form>
            </div>
            <div className="landing-image__container">
                <img src={chess1} alt="img1" />
                <img src={chess2} alt="img2" />
                <div className="landing-image__content">
                    <ul>
                        <li>Get 30% of the 1st of every month</li>
                        <li>Expert International level Teachers</li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Landing;