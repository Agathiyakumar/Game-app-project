import React from 'react';
import MyFunctionalComponent from './slick';
import 'bootstrap/dist/css/bootstrap.css';
import { GoArrowDown } from "react-icons/go";
import SimpleSlider from './Cardslick';



const Home =()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
        <div className="Home">
          <div className="welcome">
   
   <h1 className="wel" >Welcome</h1>
  
   <h3 className="wel1" data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="1500">Funstation games are here to make your gaming experience high<br></br>You can have the games and their details</h3>
 
   </div>
   
      <div className="arbtn">
        <h4 className="click">Explore</h4><button id="arrbtn" className="arrowbtn"><GoArrowDown /></button>
      </div>
      <div className="mostex">
        <h1 className="mostex1">Most Exciting Game Infos</h1>
      </div>
<div className="description">
  <p className="description1" data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="800"><h4>"Dive into a gaming haven at Funstation Games, where every click unlocks a <br></br>world of reviews, news, and exclusive insights. Immerse yourself in captivating <br></br>feature stories and join a vibrant community of like-minded gamers.</h4></p>
</div>
<div>
    <h1 className="ehead">Esports</h1>
  </div>

      
      


<div>

</div>
<div>
  <MyFunctionalComponent/>
</div>


 <div>
  <SimpleSlider/>
 </div>

<div>
  <h1>hello</h1>
</div>
 
</div>




  
      );
    };
   
    export default Home;