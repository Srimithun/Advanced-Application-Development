import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css'
import '../assets/css/Login.css';
import Navbar from "./others/Navbar";
import { useNavigate } from "react-router-dom";



const Login = ()=>{

   useEffect(()=>{
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
 
    registerBtn.addEventListener('click',()=>{
     container.classList.add("active");
     });
 
     loginBtn.addEventListener('click',()=>{
         container.classList.remove("active");
         });
   },[]);

   const nav = useNavigate('');
    

    

    return(
        <>
        
            <Navbar/>
        <div className="login-body">
        <title>Loign</title>
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>CREATE ACCOUNT</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="bx bxl-google"></i>

                        </a>
                        <a href="#" className="icon">
                            
                            <i className='bx bxl-linkedin'></i>

                        </a>
                        
                    </div>
                    <span>or use your Email for registration</span>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>SIGN IN</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="bx bxl-google"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </div>
                    <span>or use your Email and Password</span>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <a href="#">Forgot Password?</a>
                    <button onClick={()=>nav('/')}>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back</h1>
                        <p>Enter all your details</p>
                        <button class="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Welcome to Chess Academy</h1>
                        <p>Register with all your details</p>
                        <button class="hidden" id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </>
    );
}

export default Login;