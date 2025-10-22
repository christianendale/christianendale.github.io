import React from "react";
import "./Hero.css";
import profileImg from "../../assets/pfp.jpg";

const Hero = () => {
	return (
		<div className="hero">
			<img src={profileImg} width={"300px"} alt="" />
			<h1>
				<span>I am Christian Endale</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Impedit illum, maiores nihil doloremque iure laborum quae quod
				molestiae assumenda! At quasi excepturi sequi ullam dolorem odit
				quae voluptatibus et non.
			</p>
			<div className="heroAction">
				<div className="heroConnect">Connect with Me</div>
				<div className="heroResume">My Resume</div>
			</div>
		</div>
	);
};

export default Hero;
