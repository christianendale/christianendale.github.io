import React, { useState } from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import phoneIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

const Contact = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);
		formData.append("access_key", "3a53a50a-d425-4269-a92e-ab14858f05f2");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();
		if (data.success) {
			alert("Form Submitted Successfully");
			event.target.reset();
		} else {
			setResult("Error");
		}
	};

	return (
		<div>
			<div id="contact" className="contact">
				<div className="contactTitle">
					<h1>Get in touch</h1>
					<img src={themePattern} alt="" />
				</div>

				<div className="contactSection">
					<div className="contactLeft">
						<h1>Talk to me</h1>
						<p>I am currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
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
					<form onSubmit={onSubmit} className="contactRight">
						<label htmlFor="">Name</label>
						<input type="text" placeholder="Enter Your Name" name="name" />
						<label htmlFor="">Email</label>
						<input type="text" placeholder="Enter Your Email" name="name" />
						<label htmlFor="">Message</label>
						<textarea rows="6" placeholder="Enter Your Message" name="message" />
						<button type="submit" className="contactSubmit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
