import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/myLogo.png";
import underline from "../../assets/nav_underline.svg";
import { Link } from "react-scroll";

const Navbar = () => {
	const [menu, setMenu] = useState("home");
	return (
		<div className="navbar">
			<img src={logo} width={"140px"} alt="" />
			<ul className="navMenu">
				<li>
					<Link
						activeClass="active" // Class to apply when link is active (optional)
						to="home" // The ID of the section to scroll to
						spy={true} // Makes the link "active" when you scroll to it
						smooth={true} // Enables smooth scrolling
						offset={-70} // Your 50px offset (adjust as needed)
						duration={500} // Animation speed
						onSetActive={() => setMenu("home")} // Sets menu on scroll
					>
						Home
					</Link>
					{menu === "home" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onSetActive={() => setMenu("about")}
					>
						About Me
					</Link>
					{menu === "about" ? <img src={underline} /> : <></>}
				</li>
				<li>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onSetActive={() => setMenu("projects")}
					>
						Projects
					</Link>
					{menu === "projects" ? <img src={underline} /> : <></>}
				</li>
			</ul>

			<div className="navConnect">
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					onSetActive={() => setMenu("contact")}
				>
					Contact Me
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
