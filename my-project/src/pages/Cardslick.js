import Card from 'react-bootstrap/Card';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className='centre'>
        <div className='slider'>
          
            <Card>
            <h1 className='sliderhead'>--Only for You--</h1>
      <Slider {...settings} className='slider1'>
     
        <div>
          <h3>More Games More Fun at FunStations</h3>
          <div className='slideimg1'>
          <img  src="https://wallpapercave.com/wp/wp12922814.jpg" alt='' width="100%"/> 
          </div>
        </div>
        <div>
          <h3>Get the Exciting game Infos</h3>
          <div className='slideimg1'>
          <img  src="https://gameanalytics.com/wp-content/uploads/2021/05/game-explorer@2x-1-854x530.png" alt='' width="100%"/> 
          </div>
        </div>
        <div>
          <h3>Get Ready to sail in the Ocean of Games</h3>
          <div className='slideimg1'>
          <img  src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2023/03/22/dredge-1_feature.jpg" alt='' width="100%"/> 
          </div>
        </div>
        <div>
          <h3>Hunt down the games to unclock more games</h3>
          <div className='slideimg1'>
          <img  src="https://images.squarespace-cdn.com/content/v1/573ca4a22eeb816348280410/1532036147723-0F3XB5T0QRX5JMKP25OA/DSC_0570.JPG" alt='' width="100%"/> 
          </div>
        </div>
        <div>
          <h3>Esports are here!! Looking for a Champion. Are you Ready? </h3>
          <div className='slideimg1'>
          <img  src="https://us.v-cdn.net/6036147/uploads/GOQOTHGYG807/l-18-1-1200x675.jpg" alt='' width="100%"/> 
          </div>
        </div>
        <div>
          <h3>FunStations / Have a gaming rollercoster experience</h3>
          <div className='slideimg1'>
          <img  src="https://staticg.sportskeeda.com/editor/2022/01/f6fc4-16428755317343-1920.jpg" alt='' width="100%"/> 
          </div>
        </div>
      </Slider>
      </Card>
      </div>
      </div>
    );
  }