

import styled from "styled-components";

export const Box = styled.div`
	padding: 1% 1%;
	background: black;
	// position: absolute;
	border-style: solid;
    border-color: black;
	width: 100%;
	
    align-items:bottom;
	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	color:white;
    margin-top:5px;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
    margin-top:20px;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
	
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
    color:white;
	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: red;
	margin-bottom: 40px;
	font-weight: bold;
`;
