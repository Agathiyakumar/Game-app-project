import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router , Routes , Route, }from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Signup from "./pages/signup";
import Signin from './pages/signin';
import Online from './genre/online';
import Pubg from './onlinegame/pubg';
import Godofwars from './onlinegame/godofwars';
import Uncharter from './onlinegame/uncharter4';
import Action from './genre/Action';
import Fun from './genre/Fun';
import Sidebar from './components/sidebar/Sidebar';
import Offline from './genre/Offline';
import Footer from './components/Footer/Footer';

 
function App() {
  return (
    
   <Router>
    <Navbar/>
    <Sidebar/>
    
    <Routes>
      
       <Route path="/" element={<Home/>}/>  
       <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/online" element={<Online/>}/>
      <Route path="/onlinegame/pubg" element={<Pubg/>}/>
      <Route path="/onlinegame/godofwars" element={<Godofwars/>}/>
      <Route path="/onlinegame/uncharter" element={<Uncharter/>}/>
      <Route path="/action" element={<Action/>}/>
      <Route path="/fun" element={<Fun />}/>
      <Route path="/offline" element={<Offline />}/>
      <Route path="/online" element={<Online />}/>

    </Routes>
    <Footer/>
   </Router>
   
  );
}

export default App;
