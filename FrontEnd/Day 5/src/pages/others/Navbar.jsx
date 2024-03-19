import React from "react";
import '../../assets/css/LandingPage.css';
import { Link } from "react-router-dom";

const Navbar =()=> {
    return(
        <>

<nav className="nav__container">
            <div className="nav__logo"><a href="/">Chess Academy</a></div>
            <ul className="nav__links">
                <li className="link"><Link to='/courses'>Courses</Link></li>
                <li className="link"><a href="#">Admissions</a></li>
                <li className="link"><a href="#">Institutes</a></li>
                <li className="link"><a href="#">Our Academy</a></li>
                <li className="link"><a href="#">Contact Us</a></li>
                <li className="link"><Link to='/login' className="nav__btn">Login</Link></li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;