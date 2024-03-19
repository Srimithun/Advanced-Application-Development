import React from 'react';
import "../assets/css/Aboutus.css"
import Navbar from './others/Navbar';


function AboutUsPage() {
    return (
        <>
        <Navbar/>
        <div className="aboutus-container">
            <h2 className="aboutus-heading">About Chess Academy</h2>
            <p className="aboutus-description">
                Welcome to Chess Academy, where we nurture the minds of young chess enthusiasts and 
                help them hone their skills in the game of chess. Our academy is dedicated to 
                providing high-quality chess education to students of all ages and skill levels.
            </p>
            <p className="aboutus-description">
                At Chess Academy, our experienced coaches use innovative teaching methods to 
                make learning chess fun and engaging. Whether you're a beginner looking to 
                learn the basics or an advanced player aiming to enhance your strategic 
                capabilities, we have programs tailored to meet your needs.
            </p>
            <p className="aboutus-description">
                Join us at Chess Academy and embark on an exciting journey to master the 
                game of chess. Discover the joy of critical thinking, problem-solving, and 
                strategic planning as you immerse yourself in the fascinating world of chess.
            </p>
        </div>
        </>
    );
}

export default AboutUsPage;
