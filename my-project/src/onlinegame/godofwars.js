import React from "react";
import Card from 'react-bootstrap/Card';
 
const Godofwars=()=>{
  
return(
    <>
    <div className="godback">
    <Card className="god">
      <Card.Img className="godimg" src="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/5gDpzRQrhlcegaPf8wW1QIuf.png" width='800px' />
      <Card.Body>
        <Card.Text >
          <p className="godcontent">
            <h2>Game Name : GOD OF WARS</h2>
            <h2>Publishers &nbsp;&nbsp;: 	Sony Interactive Entertainment[i],Sony Pictures Digital[j] (Xbox One)</h2>
            <h2>Developer(s) : 	Primary:-Santa Monica Studio[a],Ready at Dawn[b],Javaground/SOE-LA[c]</h2>
            
            <h2>Writers(s) : Marianne Krawczyk (Greek games),Matt Sophos (Norse games),Richard Gaubert (Norse games)</h2>
            <h2>Creator(s) : 	David Jaffe</h2>
            <h2>Artist(s)	: 	Charlie Wen</h2>
            
            <h2>Genre(s) : Action-adventure,Hack and slash</h2>
            <h2>First Release	: March 22, 2005</h2>
            <h2>Last Release	: November 9, 2022</h2>
            
          </p>
        </Card.Text>
        <Card.Link className='pubglink' href="https://god-of-war.en.softonic.com/download">Download Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    </>
)
}
export default Godofwars;