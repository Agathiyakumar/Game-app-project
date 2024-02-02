import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
const Nav = styled.div`
background-image: linear-gradient( white, grey);
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
	background-image: linear-gradient( white, black);
	width: 200px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position:absolute;
	position: fixed;
	top: 0;
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
			<IconContext.Provider value={{ color: "black" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars
							onClick={showSidebar}
							
						/>
					</NavIcon>
					<h1
						style={{
							textAlign: "center",
							marginLeft: "210px",
							color: "black",
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
