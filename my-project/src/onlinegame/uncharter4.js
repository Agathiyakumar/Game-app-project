import React from "react";
import Card from 'react-bootstrap/Card';
 
const Uncharter=()=>{
  
return(
    <>
    <div className="uncharterback">
    <Card className="uncharter">
      <Card.Img  src="https://images.thequint.com/thequint%2F2016-03%2Fbbd5b7b4-8170-4293-aefc-49c35e4007ad%2FUncharted-4.jpg?rect=0%2C0%2C2000%2C1125" width='800px' />
      <Card.Body>
        <Card.Text className="unchartercontent">
          <p>
            <h2>Developer(s) :	Naughty Dog[a]</h2>
            <h2>Publisher(s) :	Sony Computer Entertainment[b]</h2>
            <h2>Director(s)	 :  Bruce Straley , Neil Druckmann</h2>
            
            <h2>Designer(s)	 :  Kurt Margenau,Emilia Schatz,Anthony Newman,Richard Cambier</h2>
            <h2>Programmer(s):  Christian Gyrling,Sandeep Shekar,Vincent Marxen,Travis McIntosh,Jason Gregory</h2>
            <h2>Artist(s)	   : 	Robh Ruppel,Erick Pangilinan,Tate Mosesian</h2>
            
            <h2>Genre(s) : Genre(s)	Action-adventure, third-person shooter</h2>
            <h2>First Release	: PlayStation 4 & May 10, 2016 , PlayStation 5,January 28, 2022</h2>
            <h2>Last Release	:Windows-October 19, 2022</h2>
            
          </p>
        </Card.Text>
        <Card.Link className='pubglink' href="">Download Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    </>
)
}
export default Uncharter;