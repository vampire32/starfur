import React, { useEffect } from "react";
import AOS from "aos";
import ExpImage from "../images/year.jpg";
import ExpImage1 from "../images/hour.png";
import ExpImage2 from "../images/money.png";
import {Ri24HoursFill} from 'react-icons/ri'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {FaCertificate} from 'react-icons/fa'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Ourcompany = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	const company = [
		{
			title: "10 Year Experinces",
			description:
				"We are star used furniture in abu dhabi having more than 10 year of experiences in market. We have expert teams to take care of everything. We proviiding reliable and flexiable services to our customer.",
			img: ExpImage,
		},
		{
			title: "24 HOURS AVAILABLE",
			description:
				"We are the only plateform who give 24 hour services to our customers. We are available for your services anytime anywhere.",
			
		},
		{
			title: "SAVE YOUR TIME & MONEY",
			description:
				"Everyone values their time and money. Here's where you'll find the simplest approach to sell your stuff..",
			img: ExpImage2,
		},
	];
	return (
		<>
			<div className=" pt-20" data-aos="fade-up">
				<h1 className="only-us text-center text-[#D6B47A]">WHY ONLY US</h1>

				<svg
					width="100vw"
					height="80"
					viewBox="0 0 500 80"
					preserveAspectRatio="none"
				>
					<path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#D6B47A" />
				</svg>
			</div>

			<div className=" container mt-10  " data-aos="fade-up">
				<div className="row text-center company-title flex justify-center">
					<div className=" col-lg-4 col-md-6     ">
						<div
							className="card drop-shadow-2xl rounded-2xl company-design"
							style={{ width: "21rem", height: "18.5rem" }}
						>
							<FaCertificate className="contact__option-icon text-[#d9c7a4] ml-[7rem] w-[80px] h-[80px] mt-4" />
							<div className="card-body">
								<h5 className="card-title font-bold">10 Year Experinces</h5>
								<h5 style={{textAlign:"justify"}}>
									We are star used furniture in abu dhabi having more than 10
									year of experiences in market. We have expert teams to take
									care of everything. We proviiding reliable and flexiable
									services to our customer.
								</h5>
							</div>
						</div>
					</div>
					<div className=" col-lg-4 col-md-6     ">
						<div
							className="card drop-shadow-2xl rounded-2xl company-design"
							style={{ width: "21rem", height: "18.5rem" }}
						>
							<Ri24HoursFill className="contact__option-icon text-[#d9c7a4] ml-[7rem] w-[80px] h-[80px] mt-4" />
							<div className="card-body">
								<h5 className="card-title font-bold">24 HOURS AVAILABLE</h5>
								<h5 style={{textAlign:"justify"}}>
									We are the only plateform who give 24 hour services to our
									customers. We are available for your services anytime
									anywhere.
								</h5>
							</div>
						</div>
					</div>
					<div className=" col-lg-4 col-md-6     ">
						<div
							className="card drop-shadow-2xl rounded-2xl company-design"
							style={{ width: "21rem", height: "18.5rem" }}
						>
							<RiExchangeDollarFill className="contact__option-icon text-[#d9c7a4] ml-[7rem] w-[80px] h-[80px] mt-4" />
							<div className="card-body">
								<h5 className="card-title font-bold">SAVE YOUR TIME & MONEY</h5>
								<h5 style={{textAlign:"justify"}}>
									Everyone values their time and money. Here's where you'll find
									the simplest approach to sell your stuff..
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Ourcompany;
