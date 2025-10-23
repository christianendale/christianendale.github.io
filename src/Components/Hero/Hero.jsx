import React from "react";
import "./Hero.css";
import profileImg from "../../assets/pfp.jpg";

const Hero = () => {
	return (
		<div id="home" className="hero">
			<img src={profileImg} width={"300px"} alt="" />
			<h1>
				<span>I am Christian Endale</span>
			</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illum, maiores nihil doloremque iure laborum quae quod molestiae assumenda! At quasi excepturi sequi ullam dolorem odit quae voluptatibus et non.</p>
			<div className="heroAction">
				<div className="heroConnect">Linkedin</div>
				<div className="heroResume">My CV</div>
				<div className="heroGithub">Github</div>
			</div>
		</div>
	);
};

export default Hero;
