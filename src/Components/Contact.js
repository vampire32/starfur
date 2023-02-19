import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./NavBar";
import { useForm, ValidationError } from "@formspree/react";


const Contact = () => {
  useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	const [state, handleSubmit] = useForm("mqkngerv");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	
	return (
		<>
			<section className="contact_section layout_padding" data-aos="fade-up">
				<div className="container ">
					<div className="heading_container">
						<h2 className="">Contact Us</h2>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<form action="https://formspree.io/f/mqkngerv" method="POST">
								<div>
									<input
										id="Name"
										type="text"
										name="name"
										required
										placeholder="Name"
									/>
								</div>
								<div>
									<input
										type="email"
										name="email"
										required
										id="Email"
										placeholder="Email"
									/>
								</div>
								<div>
									<input
										id="Phone"
										type="text"
										name="phone"
										required
										placeholder="Phone"
									/>
								</div>
								<div>
									<input
										id="Message"
										type="text"
										className="message-box"
										placeholder="Message"
									/>
								</div>
								<div className="d-flex ">
									<button id="sending">SEND</button>
								</div>
							</form>
						</div>
						<div className="col-md-6">
							<div className="map_container">
								<div className="map-responsive">
									<iframe
										src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Ad+Doja+Street2+Mussafah+Musaffah Industrial+Abu DhabiTower+United Arab Emirates"
										width="600"
										height="300"
										frameborder="0"
										style={{ border: "0", width: "100%", height: "100%" }}
										allowfullscreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
