import React from "react";
import "./Navbar.css";
import logo from "../../assets/myLogo.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<img src={logo} width={"140px"} alt="" />
			<ul className="navMenu">
				<li>Home</li>
				<li>About Me</li>
				<li>Projects</li>
			</ul>

			<div className="navConnect">Contact Me</div>
		</div>
	);
};

export default Navbar;
