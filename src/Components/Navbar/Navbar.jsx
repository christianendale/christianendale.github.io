import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/myLogo.png";
import underline from "../../assets/nav_underline.svg";
import { Link } from "react-scroll";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const Navbar = () => {
	const [menu, setMenu] = useState("home");
	const menuRef = useRef();

	const openMenu = () => {
		menuRef.current.style.right = "0";
	};

	const closeMenu = () => {
		menuRef.current.style.right = "-400px";
	};
	return (
		<div className="navbar">
			<img src={logo} width={"140px"} alt="" />
			<img src={menuOpen} onClick={openMenu} alt="" className="openNav" />
			<ul ref={menuRef} className="navMenu">
				<img src={menuClose} onClick={closeMenu} alt="" className="closeNav" />
				<li>
					<Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={() => setMenu("home")}>
						Home
					</Link>
					{menu === "home" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={() => setMenu("about")}>
						About Me
					</Link>
					{menu === "about" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={() => setMenu("projects")}>
						Projects
					</Link>
					{menu === "projects" ? <img src={underline} /> : <></>}
				</li>
			</ul>

			<div className="navConnect">
				<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} onSetActive={() => setMenu("contact")}>
					Contact Me
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
