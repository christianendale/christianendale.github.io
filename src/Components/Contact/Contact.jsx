import React from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import phoneIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

const Contact = () => {
	return (
		<div>
			<div className="contact">
				<h1>Get in touch</h1>
				<img src={themePattern} alt="" />
			</div>
			<div className="contactSection">
				<div className="contactLeft">
					<h1>Talk to me</h1>
					<p>
						I am currently open to new opportunities. Whether you have a question or
						just want to say hi, feel free to reach out!
					</p>
					<div className="contactDetails">
						<div className="contactDetail">
							<img src={mailIcon} alt="" /> <p>christiangirmachew@gmail.com</p>
						</div>
						<div className="contactDetail">
							<img src={phoneIcon} alt="" /> <p>07868382002</p>
						</div>
						<div className="contactDetail">
							<img src={locationIcon} alt="" /> <p>Birmingham, England</p>
						</div>
					</div>
				</div>
				<form action="" className="contactRight">
					<label htmlFor="">Your Name</label>
					<input type="text" placeholder="Enter Your Name" name="name" />
					<label htmlFor="">Your Email</label>
					<input type="text" placeholder="Enter Your Email" name="name" />
					<label htmlFor="">Your Message</label>
					<textarea rows="6" placeholder="Enter Your Message" name="message" />
					<button type="submit" className="contactSubmit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
