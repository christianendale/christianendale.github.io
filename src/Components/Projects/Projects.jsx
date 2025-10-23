import React from "react";
import "./Projects.css";
import themePattern from "../../assets/theme_pattern.svg";
import projectsData from "../../assets/projectsData";
import arrowIcon from "../../assets/arrow_icon.svg";

const Projects = () => {
	return (
		<div id="projects" className="projects">
			<div className="projectsTitle">
				<h1>My Projects</h1>
				<img src={themePattern} alt="" />
			</div>
			<div className="projectsContainer">
				{projectsData.map((project, index) => {
					return (
						<div key={index} className="projectsFormat">
							<h3>{project.index}</h3>
							<h2>{project.name}</h2>
							<p>{project.desc}</p>
							<div className="readMore">
								<p>Read More</p>
								<img src={arrowIcon} alt="" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
