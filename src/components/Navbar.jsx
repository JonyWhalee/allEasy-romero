import React from "react";
import styled from "styled-components";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<NavContainer>
				<div className="container">
					<h2>allFree</h2>
					<div>
						<a href="#">Inicio</a>
						<a href="#">Productos</a>
						<a href="#">Contacto</a>
					</div>
					<a href="#">Carrito</a>
				</div>
			</NavContainer>
		</>
	);
}
export default Navbar;
const NavContainer = styled.nav``;
