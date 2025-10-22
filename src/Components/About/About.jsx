import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import profileImg from "../../assets/pfp.jpg";

function About() {
	return (
		<div className="about">
			<div className="aboutTitle">
				<h1>About Me</h1>
				<img src={themePattern} alt="" />
				<div className="aboutSection">
					<div className="aboutLeft">
						<img src={profileImg} alt="" />
					</div>
					<div className="aboutRight">
						<div className="aboutParagraph">
							<p>I have this experience in web development.</p>
							<p></p>
						</div>
						<div className="aboutSkills">
							<div className="aboutSkill">
								<p>JavaScript</p>
								<hr width="50%" />
							</div>
							<div className="aboutSkill">
								<p>HTML</p>
								<hr width="50%" />
							</div>{" "}
							<div className="aboutSkill">
								<p>CSS</p>
								<hr width="50%" />
							</div>{" "}
							<div className="aboutSkill">
								<p>React</p>
								<hr width="50%" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
