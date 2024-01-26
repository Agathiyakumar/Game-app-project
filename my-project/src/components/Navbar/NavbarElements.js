
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background:  black;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    font-size: 22px;
    
`;
 
export const NavLink = styled(Link)`
    color: white;
   
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 3px ;
    height: 100%;
    cursor: pointer;
    margin-right:40px;
    &.active{
        text-decoration:underline;
        text-decoration-color:blue;
       
       border-color:yellow;
    }
    &:hover{
        background-color:blue;
    }
   
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color:white;
   
    
`;
 
export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 0px;
    @media screen {min-width: 380px;
        flex-direction: row;
        margin-right:0px;
      }
`;
 
export const Navbutton = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    
   
    @media screen {min-width: 380px;
        flex-direction: row;
      
      }
`;
 
export const NavbtnLink = styled(Link)`
display: flex;
flex-direction: row;
    border-radius: 10px;
    background: black;
    padding: 3px;
    color:orange;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: red;
        color:black;
    }
`;