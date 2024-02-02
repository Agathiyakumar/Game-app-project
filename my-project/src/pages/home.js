import React from "react";


import 'bootstrap/dist/css/bootstrap.css';
import { GoArrowDown } from "react-icons/go";


const Home =()=>{

    return (
        <div className="Home">
          <div className="welcome">
   
   <h1 className="wel">Welcome</h1>
  
   <h3 className="wel1">Funstation games are here to make your gaming experience high<br></br>You can have the games and their details</h3>
 
   </div>
   
      <div className="arbtn">
        <h4 className="click">Explore</h4><button id="arrbtn" className="arrowbtn"><GoArrowDown /></button>
      </div>
      <div className="mostex">
        <h1 className="mostex1">Most Exciting Game Infos</h1>
      </div>
<div className="description">
  <p className="description1"><h4>"Dive into a gaming haven at Funstation Games, where every click unlocks a <br></br>world of reviews, news, and exclusive insights. Immerse yourself in captivating <br></br>feature stories and join a vibrant community of like-minded gamers.</h4></p>
</div>
<div>
    <h1 className="ehead">Esports</h1>
  </div>
<div className="parent">
<h1 className="esporthead">
   >>>  Join the Esport's  >>>
  </h1>
  <h5 className="esporthead1"> Join our game website for a thrilling gaming experience, featuring competitive leagues, engaging tournaments, and a vibrant community. Level up your skills and connect with fellow gamers on our platform today!"</h5>
  <div className="esport">
  
      <img className="esportimg" src={"https://c4.wallpaperflare.com/wallpaper/608/212/2/electronic-sports-league-esl-esport-esports-wallpaper-preview.jpg"} alt=".." width="100%" height="auto"/>
  </div>
  <div className="esport">
  <button class="button-53" role="button">Updates</button>
  <div className="esport">
  <button class="button-52" role="button">Upcoming</button>
  </div>
  </div>
</div>
<h1>hello</h1>



 
 
</div>




  
      );
    };
   
    export default Home;