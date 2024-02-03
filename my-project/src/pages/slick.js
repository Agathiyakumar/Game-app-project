
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="parent"   data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="800">
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
  );
}