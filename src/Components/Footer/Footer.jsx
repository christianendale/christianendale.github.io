import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/myLogo.png";
import userIcon from "../../assets/user_icon.svg";

const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div className="footerTop">
					<div className="topLeftFooter">
						<img src={footerLogo} alt="" />
						<p>
							I'm a aspriring this this and that. Lorem ipsum dolor sit amet
							consectetur adipisicing elit.
						</p>
					</div>
					<div className="topRightFooter">
						<div className="footerEmail">
							<img src={userIcon} alt="" />
							<input type="email" placeholder="Enter your email" />
						</div>
						<div className="subscribe">Subscribe</div>
					</div>
				</div>
				<hr />
				<div className="footerBottom">
					<p className="bottomLeftFooter">&copy; Christian Endale. All rights reserved</p>
					<div className="bottomRightFooter">
						<p>Term of Services</p>
						<p>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
