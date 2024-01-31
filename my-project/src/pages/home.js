import React from "react";
import Card from 'react-bootstrap/Card';
import hlogo from "../images/fslogo.png";
import abdul from "../images/abdul.jpg";
const Home =()=>{

    return (
        <div className="Home">
          <div>
          <p className="wel"><h3 id="slide" className="wel1">Welcome<br></br><img className="trans" src="https://i.pinimg.com/originals/48/97/8a/48978ae4a441a238efa96be74d2bd615.jpg" alt="" width="350" height="250" />FUNSTATION-Games</h3>
          </p>
          
        </div>

        
        <div className="secret">
        <div class="creatorwrapper">
	<div class="creatorbox">
		<p className="creatorp">C-R-E-A-T-O-R-S</p>
	</div>
       </div>
        <img src={hlogo} alt="" />
        <img  className="hlogo"  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWuCti9XKYban2bLcVqCjNESHN4i6fVJuNCXQlkNZJxA&s"} alt="" height="198px"/>
        <img className="hlogo1" src={"https://d.newsweek.com/en/full/1587743/xbox-logo-20-20-black-white.jpg?w=1600&h=1200&l=50&t=32&q=88&f=9ba9bdd11f95a5347022544352db9a92"} alt="" height="198px"/>
        </div>

        <div className="creators">
        <img className="creatorimg" src="https://cdns-images.dzcdn.net/images/artist/b9e931b12e626ad72990763df6ce0ad0/500x500-000000-80-0-0.jpg" height="280" width="300" />
<img className="creatorimg" src={abdul} height="280" width="300"/>
<img className="creatorimg" src="https://venturebeat.com/wp-content/uploads/2011/05/seamus-blackley.jpg?resize=300%2C363&strip=all" height="280" width="300"/>
        </div>


        
        

        <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Card one</h2>
      <p>More Games More Fun.</p>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Card two</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Card Three</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#">Read More</a>
    </div>
  </div>
</div>


             <h1 className="pop">POPULAR-Games</h1>
             <div class="poptable">
             <table>
            
              <tr>
                <td>
             <div className="cards7">
              
             <Card style={{ width: '18rem', color:"white"}}>
      <Card.Img variant="top" src={"https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt0e5bf4611f1af776/64cb739c8976bf7d7b26e199/gta_v_mod.jpg"} width="268" height="180"/>
      <Card.Body>
        <Card.Title>GTA - 5</Card.Title>
        <Card.Text>
        Grand Theft Auto V and GTA Online — now upgraded for PlayStation 5 and Xbox Experience entertainment blockbusters,Grand Theft Auto V.
        </Card.Text>
        
      </Card.Body>
    </Card>
                </div>
                </td>
             <td>
                <div className="cards7">
              
              <Card style={{ width: '18rem', color:"white"}}>
       <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECNfga88Kode8crZMsZ8jf1dqR5lfHWph3g&usqp=CAU"} width="268" height="180"/>
       <Card.Body>
         <Card.Title>NFS</Card.Title>
         <Card.Text>
         Need for Speed (NFS) Is a Racing game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout
         </Card.Text>
         
       </Card.Body>
     </Card>
  
  
                 </div>
                 </td>
                 <td>
                 <div className="cards7">
              
              <Card style={{ width: '18rem', color:"white"}}>
       <Card.Img variant="top" src={"https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png"} width="268" height="180"/>
       <Card.Body>
         <Card.Title>MORTAL KOMBAT 11</Card.Title>
         <Card.Text>
          It is the eleventh main installment in the Mortal Kombat series and a sequel to Mortal Kombat X (2015). developed by NetherRealm Studios.
         </Card.Text>
         
       </Card.Body>
     </Card>
  

     </div>
     </td>
     </tr>
     <tr>
      <td>
                 <div className="cards7">
              
              <Card style={{ width: '18rem', color:"white"}}>
       <Card.Img variant="top" src={"https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg"} width="268" height="180"/>
       <Card.Body>
         <Card.Title>FORTNITE</Card.Title>
         <Card.Text>
         Fortnite is an online video game.Free-to-play battle royale game in which up to 100 players fight to be the last person standing. Lego Fortnite.
         </Card.Text>
         
       </Card.Body>
     </Card>
  
                 </div>
                 </td>
                 <td>
                 <div className="cards7">
              
              <Card style={{ width: '18rem', color:"white"}}>
       <Card.Img variant="top" src={"https://www.esrb.org/wp-content/uploads/2022/11/Minecraft-FEATURED-1024x576-_-R.jpg"} width="268" height="180"/>
       <Card.Body>
         <Card.Title>MINECRAFT</Card.Title>
         <Card.Text>
         Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines. Depending on their chosen mode.
         </Card.Text>
         
       </Card.Body>
     </Card>
  
                 </div>
                 </td>
                 <td>
                 <div className="cards7">
              
              <Card style={{ width: '18rem', color:"white"}}>
       <Card.Img variant="top" src={"https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/06/Call-of-Duty-Modern-Warfare-II_Reveal_X1_Wire_Hero_1920x1080-b5aea4e5ca6046ac478e.jpg"} width="268" height="180"/>
       <Card.Body>
         <Card.Title>CALL OF DUTY</Card.Title>
         <Card.Text>
         The famous FPS multiplayer game is back with new seasons full of action! Play this fun first-person shooter (FPS) and explore popular         </Card.Text>
         
       </Card.Body>
     </Card>
  
                 </div>
                 </td>
                 </tr>
                 </table>
           </div>
        
          

        </div>
        
      );
    };
   
    export default Home;