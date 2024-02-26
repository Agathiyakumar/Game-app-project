import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
const Nav = styled.div`
background-color:black;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 1rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	
`;

const SidebarNav = styled.nav`
	margin-top:140px;
    background-image:url("https://e0.pxfuel.com/wallpapers/358/40/desktop-wallpaper-dark-background-dark-gaming.jpg");  
	background-repeat: no-repeat;
	background-size:cover;
	width: 200px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position:absolute;
	
	margin-top: 1px;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 550ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "white" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
							
						/>
					</NavIcon>
					<h1
						style={{
							textAlign: "center",
							marginLeft: "130px",
							color: "red",
							
							  
						}}
					>
						FUNSTATION GAMES
				</h1>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							
							<AiIcons.AiOutlineClose
								onClick={showSidebar}
								
							/>
							
						</NavIcon>
						{SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
