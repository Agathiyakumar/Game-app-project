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
        <div className='slider'>
            <Card>
      <Slider {...settings} className='slider1'>
        <div>
          <img className='slideimg1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFaNOBUaL2VoYnH3ghY9DA-m9cTvZqGWGFZdbUVtHwGdax_7WlfZdFZSe9MmzcX_7TjI&usqp=CAU" alt=''  />
       <div>
       <Stack spacing={1}>
      <h3>Funstation Rating</h3>
      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
      <h3>Your Rating</h3>
      <Rating name="half-rating" defaultValue={1} precision={0.5} />
    </Stack>
       </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      </Card>
      </div>
    );
  }