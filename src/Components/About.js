import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/responsive.css";
import "../css/style2.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { FaHorseHead } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";
import BM from "../images/about-business-man.jpg";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import {Helmet} from "react-helmet-async"

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<>
		<Helmet>
<title>About us</title>
<meta data-rh="true" name="description"content="Star used furniture has been around for a long time. we know what we're doing we buy and sell used furniture and appliances.0503338692"></meta>
<link rel="canonical" href="/about"/>
		</Helmet>
		
			<div className="bg_nav">
				< div className="hero-area22">
				<NavBar  theme="dark" color="white" />
				<section className="hero-area2">
					<div className="block" data-aos="fade-in">
					<p>Welcome to </p>
						<h1>Star Used Furniture Abu Dhabi</h1>
						<p>
						Star used furniture has been around for a long time. Because we buy and sell used furniture and appliances, we know what we're doing. As a used furniture for sale Abu Dhabi and Al Ain company, we have high standards for our products and services, and we aim to meet them with you in mind. There are numerous aspects to consider when selling and acquiring furniture, one of which is that Star used furniture should offer furniture that fits within our budget.
						</p>
						<Link data-scroll to="/" className="btn btn-transparent">
							Explore Us
						</Link>
					</div>
				</section>
			</div>
			</div>
			<section className=" about section">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div
							className="title text-center wow fadeIn"
							data-wow-duration="1500ms"
						>
							<h2 className="text-black">
								About <span className="color">Us</span>{" "}
							</h2>
							<div className="border"></div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
						>
							<div className="block font-weight-bold ">
								<div className="icon-box">
									<FiPenTool className="tf-tools lg:ml-0 sm:ml-[50px] icons"></FiPenTool>
								</div>

								<div className="content text-center">
									<h3 className="ddd ">Experience over 10 Year</h3>
									<p className="dddp">
										We are experience buyers in Abu dhabi & Al ain. We have a high knowledge of furnitures and appliances for buying and selling.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="250ms"
						>
							<div className="block drop-shadow-2xl">
								<div className="icon-box">
									<FaHorseHead className="tf-strategy lg:ml-0 sm:ml-[50px] icons"></FaHorseHead>
								</div>

								<div className="content text-center">
									<h3 className="ddd">We're Professional</h3>
									<p className="dddp">
										We are professional buyers in Abu Dhabi over many years. We know what we sell and buy and We provide professional and reliable services to our customers.
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="500ms"
						>
							<div className="block kill-margin-bottom drop-shadow-2xl">
								<div className="icon-box">
									<BiAnchor className="tf-anchor2 lg:ml-0 sm:ml-[50px] icons"></BiAnchor>
								</div>

								<div className="content text-center">
									<h3 className="ddd">Customer Support</h3>
									<p className="dddp">
										We have a responsive team for your services and provide 24/7 services. Star used furniture are here to take care of your problems.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section about-2 padding-0 " id="about">
				<div className="container-fluid">
					<div className="row" data-aos="fade-up">
						<div className="col-md-6 padding-0 ">
							<img className="img-responsive" src={BM} alt="" />
						</div>
						<div className="col-md-6">
							<div className="content-block">
								<h2>We’re Star Used Furniture Abu Dhabi.</h2>
								<p>
								Star Used Furniture has been in the sector for many years, and we have assisted in the delivery of high-quality furniture to houses ranging from sofas to beds, tables to cabinets. We have a wide selection of new and used appliances that will suit both your budget and your needs.
								</p>
								<p>
								For secondhand furniture, household products, home appliances, and electronics, we are the Ruling Buyers. You may have old, worn-out items to sell to a dependable buyer; we are the most dependable purchasers in Abu Dhabi. You may rely on us to buy your used furniture, appliances, and other home things.
								</p>
								
									<p>
									We also offer great shifting and moving services, and you can always count on us in an emergency circumstance. You can reach out to our team, and they will be happy to assist you. At all times, we are dedicated to giving the finest possible service. In fact, we believe it is our responsibility as professionals in this field, and we will go to any length for you! That means if you ever have a situation that requires immediate response, don't hesitate to contact us.
								</p>
								<div className="row">
									<div className="col-md-6">
										<div className="media">
											<div className="pull-left">
												<i className="tf-circle-compass"></i>
											</div>
											<div className="media-body">
												<h4 className="media-heading">Our Mission</h4>
												<p>
												By providing clients with high-quality items at reasonable pricing and unmatched customer service, we are able to continue to innovate and grow. It exemplifies the country's highest goals, ethos, and commitment. Star Used Furniture is committed to providing the highest level of quality – on par with any other well-known international brand.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="media">
											<div className="pull-left">
												<i className="tf-hotairballoon"></i>
											</div>
											<div className="media-body">
												<h4 className="media-heading">Our Vision</h4>
												<p>
												To be a commercially strong corporation that achieves high levels of customer satisfaction in the sector of furniture, home appliances, and electronics. You can rely on us to deliver only the finest.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="counter" className="parallax-section bg-1 section overly">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
						>
							<div className="counters-item drop-shadow-2xl">
								<BiHappyAlt className="tf-ion-android-happy w-[80px] h-[80px]  lg:ml-[95px] md:ml-[47px] "></BiHappyAlt>
								<span data-speed="3000" data-to="320">
									1000+
								</span>
								<h3>Happy Clients</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="200ms"
						>
							<div className="counters-item drop-shadow-2xl">
								<AiOutlineDownload className="tf-ion-android-happy w-[80px] h-[80px] lg:ml-[95px] md:ml-[47px]  "></AiOutlineDownload>
								<span data-speed="3000" data-to="565">
									800+
								</span>
								<h3>Sell & Buy</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="400ms"
						>
							<div className="counters-item drop-shadow-2xl">
								<FaThumbsUp className="tf-ion-android-happy w-[80px] h-[80px] lg:ml-[95px] md:ml-[47px] "></FaThumbsUp>
								<span data-speed="3000" data-to="95">
									95%
								</span>
								<h3>Positive feedback</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="600ms"
						>
							<div className="counters-item kill-margin-bottom drop-shadow-2xl">
								<GiCoffeeCup className="tf-ion-android-happy w-[80px] h-[80px] lg:ml-[95px] md:ml-[47px] "></GiCoffeeCup>
								<span data-speed="3000" data-to="2500">
									500+
								</span>
								<h3>collections</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
