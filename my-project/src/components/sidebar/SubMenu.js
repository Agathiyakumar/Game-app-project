// Filename - components/SubMenu.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
	display: flex;
	color: black;
	justify-content: space-between;
	align-items: center;
	padding: 25px;
	list-style: none;
	height: 40px;
	text-decoration:none;
	font-size: 25px;
	transition: all .2s ease-in-out; 
	margin-bottom:5px;
	margin-top:30px;
	
	&:hover {
		background-image: linear-gradient(to right, black, white);
		transform: scale(0.9);
	
		border-radius:10px;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	background: white;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 18px;

	&:hover {
		background: green;
		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink
				to={item.path}
				onClick={item.subNav && showSubnav}
			>
				<div>
					{item.icon}
					<SidebarLabel>
						{item.title}
					</SidebarLabel>
				</div>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink
							to={item.path}
							key={index}
						>
							{item.icon}
							<SidebarLabel>
								{item.title}
							</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
