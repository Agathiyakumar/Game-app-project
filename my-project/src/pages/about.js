import React from "react";
import fslogo from '../images/fslogo.png';

const About=()=>{
    return(
        <>
        <div className="about">
        
          <div class="flip-card">
          <div class="flip-card-inner">
          <div class="flip-card-front">
          <img src={fslogo} alt="Avatar" width="400px"  height="300px"/>
          </div>
          <div class="flip-card-back">
          <h1>FS</h1>
          <p>FunStation Games</p>
          <p>Powered by FUNSTATION [Pvt]</p>
          </div>
          </div>
          </div>
          <div>
            <div className="card1">
            <h2 className="abtcontent">FunStation is more than a website, it's a thriving community. Connect with like-minded gamers in our forums, share tips and tricks, or join in lively discussions about your favorite titles. The fun doesn't stop when you're offline . Our community is active 24/7.<br></br>Wondering if a new release is worth your time? Our detailed game reviews provide honest assessments, helping you make informed decisions about what to play next. We celebrate the best and provide constructive feedback when needed.</h2>
           
            </div>
          </div>
        </div>
        </>
    );
};
export default About;