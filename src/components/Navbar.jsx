import React from "react";
import styled from "styled-components";

function NavBar() {
	return (
		<>
			<NavContainer>
				<h2>allFree</h2>
				<div>
					<a href="#">Inicio</a>
					<a href="#">Productos</a>
					<a href="#">Contacto</a>
				</div>
				<a href="#">Carrito</a>
			</NavContainer>
		</>
	);
}
export default NavBar;
const NavContainer = styled.nav`
	h2 {
		color: #fff;
	}
	padding: 10px;
	background-color: #333;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		color: white;
		text-decoration: none;
		margin-right: 20px;
	}
`;
