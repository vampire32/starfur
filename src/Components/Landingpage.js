import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/posterdownRes.css";
import "../css/Landing.css";
import {Helmet} from "react-helmet-async"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

const Landingpage = (props) => {
		useEffect(() => {
			AOS.init({
				duration: 1500,
			});
		}, []);
	return (
		<>
		<Helmet>
<title>{props.Htitle}</title>
<meta  name="description"content="We are Star Used Furniture in Abu dhabi and Al ain. We buy and sell used furnitures include Royal furniture , Normal Furniture, Ikea Furniture in Abu Dhabi. 0503338692 "></meta>
<link rel="canonical" href={props.HLink}/>
		</Helmet>

			<div className="bg_navvv">
			<div  className="bg-navvv-color">
				<NavBar theme="dark" color="white" />

				<div className=" banner_main">
					<div className=" container text-center bg_white" data-aos="fade-in">
						<span style={{fontSize:"3rem",color:"#D6B47A"}}>{props.topname}</span>
						<h1 style={{fontSize:"2rem"}} className=" mb-3">{props.secondryname}</h1>
						<h2 className="  mb-3">{props.thirdname}</h2>
						<p className=" mb-5 ">{props.desc}</p>
						<form  class="  ">
						<a style={{backgroundColor:"transparent",border:"1px solid #d9c7a4",textDecoration:"none",color:'#d9c7a4'}} href="tel:0503338692" class="button glow-button " type="submit">
							Call Now
						</a>
					</form>
					</div>
					
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<defs>
						<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: "white" }} />
							<stop offset="100%" style={{ stopColor: "white" }} />
						</linearGradient>
					</defs>
					<path
						fill="url(#grad2)"
						fill-opacity="1"
						d="M0,32L60,69.3C120,107,240,181,360,224C480,267,600,277,720,261.3C840,245,960,203,1080,170.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
			</div>
			{/* <section className="ui-section-hero bg-gradient-to-r from-[#d9c7a4] to-[#614124] text-white     ">
				<div className="ui-layout-container">
					<div className="ui-section-hero__layout ui-layout-grid ">
						<div className=" text-center">
							<h2 className=" mb-3">{props.topname}</h2>
							<h1 className=" mb-3">{props.secondryname}</h1>
							<h2 className="  mb-3">{props.thirdname}</h2>
							<p className="ui-text-intro mb-3">{props.desc}</p>
							<Link to='/about' className=" btnnn">Read More</Link>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default Landingpage;
