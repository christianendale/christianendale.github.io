import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/myLogo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
	const [menu, setMenu] = useState("home");
	return (
		<div className="navbar">
			<img src={logo} width={"140px"} alt="" />
			<ul className="navMenu">
				<li>
					<AnchorLink className="anchorLink" href="#home">
						<p onClick={() => setMenu("home")}>Home</p>
					</AnchorLink>
					{menu === "home" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<AnchorLink className="anchorLink" offset={50} href="#about">
						<p onClick={() => setMenu("about")}>About Me</p>
					</AnchorLink>
					{menu === "about" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<AnchorLink className="anchorLink" offset={50} href="#projects">
						<p onClick={() => setMenu("projects")}>Projects</p>
					</AnchorLink>
					{menu === "projects" ? <img src={underline} /> : <></>}
				</li>
			</ul>

			<div className="navConnect">
				<AnchorLink className="anchorLink" offset={50} href="#contact">
					<p onClick={() => setMenu("contact")}>Contact Me</p>
				</AnchorLink>
			</div>
		</div>
	);
};

export default Navbar;
