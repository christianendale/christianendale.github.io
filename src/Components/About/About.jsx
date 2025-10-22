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
			</div>

			<div className="aboutSection">
				<div className="aboutLeft">
					<img src={profileImg} alt="" />
				</div>

				<div className="aboutRight">
					<div className="aboutParagraph">
						<p>
							I have this experience in web development. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Dolores voluptate deleniti vel fugiat
							asperiores ut quaerat enim assumenda incidunt consequuntur inventore
							tempore, iure cum voluptatem autem, ab nostrum vitae minus?
						</p>
						<p>
							i have passion about this this and that. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Animi delectus adipisci aut, fugit numquam
							porro praesentium dolore! Cupiditate cumque asperiores dolore eveniet
							consectetur dolor nam quis unde, dolores fuga magni.
						</p>
					</div>

					<div className="aboutSkills">
						<div className="aboutSkill">
							<p>Java</p> <hr style={{ width: "50%" }} />
						</div>
						<div className="aboutSkill">
							<p>HTML</p> <hr style={{ width: "70%" }} />
						</div>
						<div className="aboutSkill">
							<p>CSS</p> <hr style={{ width: "60%" }} />
						</div>
						<div className="aboutSkill">
							<p>REACT</p> <hr style={{ width: "80%" }} />
						</div>
					</div>
				</div>
			</div>

			<div className="aboutAchievements">
				<div className="aboutAchievement">
					<h1>10+</h1>
					<p>YEARS OF EXPERIENCE</p>
				</div>
				<hr />
				<div className="aboutAchievement">
					<h1>90+</h1>
					<p>PROJECTS COMPLEATED</p>
				</div>
				<hr />
				<div className="aboutAchievement">
					<h1>15+</h1>
					<p>HAPPY CLIENTS</p>
				</div>
			</div>
		</div>
	);
}

export default About;
