import React from 'react'
import location from '../images/location-white.png'
import telphone from '../images/telephone-white.png'
import envolpe from '../images/envelope-white.png'
import i1 from '../images/i-1.jpg'
import i2 from "../images/i-2.jpg";
import i3 from "../images/i-3.jpg";
import i4 from "../images/i-4.jpg";
import i5 from "../images/i-5.jpg";
import i6 from "../images/i-6.jpg";
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import yt from '../images/youtube.png'
import link from '../images/linkedin.png'
import "../css/testimonials.css";
import {AiOutlineGooglePlus} from 'react-icons/ai';
import{FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Footer = () => {
  
  return (
		<>
			<section
				className="info_section layout_padding2"
				style={{ marginTop: "5%" }}
			>
				<div className="container">
					<div className="info_logo">
						<h2>Star Used furniture Abu Dhabi</h2>
					</div>
					<div className="row">
						<div className="col-md-3">
							<h5>Our Showroom</h5>
							<div className="info_info text-justify">
								<p>
									Star used furniture has been in the industry for many years.
									We know what we’re doing since we purchase and sell secondhand
									furniture and appliances. Our firm has high standards for our
									products and services as used furniture for sale Abu Dhabi and
									Al Ain firm, and we strive to meet them with you in mind.
								</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="info_contact">
								<h5>Address</h5>
								<div>
									<div className="img-box">
										<img src={location} width="18px" alt="" />
									</div>
									<p>
										Ad Doja 2 St - Musaffah - Musaffah Industrial - Abu Dhabi -
										United Arab Emirates
									</p>
								</div>
								<div>
									<div className="img-box">
										<img src={telphone} width="12px" alt="" />
									</div>
									<p>+971 0503338692</p>
								</div>
								<div>
									<div className="img-box">
										<img src={envolpe} width="18px" alt="" />
									</div>
									<p>info@starfurniture.com</p>
								</div>
							</div>
						</div>

						<div className="col-md-3">
							<div className="info_insta">
								<h5>Quick Links</h5>
								<div className="insta_container">
									<div>
										<Link to="/">
											<div className="insta-box b-1 mb-3">
												<h3>Home</h3>
											</div>
										</Link>
										<Link to="/about">
											<div className="insta-box b-2 mb-3">
												<h3>About</h3>
											</div>
										</Link>
									</div>

									<div>
										<a href="/usedfurniture">
											<div className="insta-box b-3 mb-3">
												<h3>Used Furniture</h3>
											</div>
										</a>
										<a href="/homeappliances">
											<div className="insta-box b-4 mb-3">
												<h3>Home Appliances</h3>
											</div>
										</a>
									</div>
									<div>
										<a href="/usedaircondition">
											<div className="insta-box b-3 mb-3">
												<h3>Used AirCondition</h3>
											</div>
										</a>
										<a href="/contactus">
											<div className="insta-box b-4 mb-3">
												<h3>Contactus</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="info_form ">
								<h5>Tags</h5>
								<div>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Used furniture buyer abu Dhabi
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Used furniture buyer al ain
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Used furniture buyer mussafah
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Used furniture buyers
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Abu Dhabi furniture buyers
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										furniture buyer al ain
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										furniture buyer abu dhabi
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										buy and sell used furniture abu dhabi
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										secondhand furniture buyers
									</h2>
									<h2
										style={{
											color: "white",
											fontSize: "17px",
											fontWeight: "lighter",
											margin: "10px",
											textAlign: "justify",
										}}
									>
										Ikea furniture buyers
									</h2>
								</div>

								<div className="social_box">
									<a href="https://www.facebook.com/Star-Used-Furniture-111687324911690">
										<FaFacebookF />
									</a>
									<a href="/">
										<GrInstagram />
									</a>
									<a href="mailto:info@starfurniture.com">
										<AiOutlineGooglePlus />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container-fluid footer_section ">
				<div className="container">
					<p>
						&copy; 2022 All Rights Reserved By
						<a href="#"> Star Used Furniture</a>
					</p>
					<p style={{ marginTop: "-35px" }}>
						Design & Maintain by Protech Experts.
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer