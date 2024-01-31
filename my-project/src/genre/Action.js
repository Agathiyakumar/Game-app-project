import React from "react";
import { useNavigate } from "react-router-dom";
const Action=()=> {
    const navigate=useNavigate();
    const  navpubg=()=>{
        navigate('/onlinegame/pubg');
    };
    const  navgod=()=>{
      navigate('/onlinegame/godofwars');
  };
  const  navuncharter=()=>{
    navigate('/onlinegame/uncharter');
};
    return (
      
      
<div className="Action">
      <div class="container">
      <div class="box">
        <span></span>
        <div class="content">
          <h2>PUBG</h2>
          <p>Pubg Battle Ground is a global version of a battle field game . Which allows the playeers from different servers to connect in a single game.</p>
          <button onClick={navpubg} className="btn12">Read More</button>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>God Of Wars</h2>
          <p>God of Wars is pc and Playstation game. In which the main charcter is a God Butcher . The is based on the greek Myth gods and their Powers.</p>
          <button onClick={navgod} className="btn12">Read More</button>
        </div>
      </div>
      <div class="box">
        <span></span>
        <div class="content">
          <h2>Uncharter-4</h2>
          <p>Uncharter-4 is Treasure Hunt Game.It allows multiplayer upto ten players to engage on competitive gameplay in recreation of single player settings.</p>
          <button onClick={navuncharter} className="btn12">Read More</button>
        </div>
      </div>
    </div>
</div>
      );
    };

export default Action;