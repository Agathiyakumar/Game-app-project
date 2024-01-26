import React from "react";

import {
    Nav,NavLink,Bars,NavMenu,Navbutton,NavbtnLink, }from "./NavbarElements";
    const Navbar=()=>{
        return(
            <>
            <Nav>
                <Bars/>
                <NavMenu>
                <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/signup" activeStyle>Admin</NavLink>
                </NavMenu>
                <Navbutton>
                    <NavbtnLink to="/signin">Signin</NavbtnLink>
                </Navbutton>
            </Nav>
            </>
        );
    };
    export default Navbar;