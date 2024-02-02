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
<div className="parent">
  <div>
    <h1 className="ehead">Esports</h1>
  </div>
  <div className="esport">
      <img className="esportimg" src={"https://c4.wallpaperflare.com/wallpaper/608/212/2/electronic-sports-league-esl-esport-esports-wallpaper-preview.jpg"} alt=".." width="100%" height="auto"/>
  </div>
  <div className="esport">
    <button>Updates</button>
  </div>
</div>




 
 
</div>




  
      );
    };
   
    export default Home;