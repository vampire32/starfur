import React, {useState} from 'react'
import PLay from '../images/play.png'
import Slider from '../images/furniture-chair.png'
import Slider1 from '../images/home-appliances.png'
import Slider2 from '../images/air-conditioner.png'
import Slider3 from '../images/household-items.png'
import {Helmet} from "react-helmet-async"
import { FaArrowCircleUp } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/Loader.css'
const Home = (props) => {
	const [showScroll, setShowScroll] = useState(false);
	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};
	window.addEventListener("scroll", checkScrollTop);
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	
	
	
   
			
   
  return (
		<>
			<Helmet>
				<title>Used Furniture Buyer Abu Dhabi | Star Furniture Buyer Al Ain</title>
				<meta
					data-rh="true"
					name="description"
					content="We are Star Used Furniture in Abu dhabi and Al ain. We buy and sell used furnitures include Royal furniture , Normal Furniture, Ikea Furniture in Abu Dhabi. 0503338692 "
				></meta>
				{/* <link rel="canonical" href="/" /> */}
				<link rel='canconical' href={props.Hlink}/>
			</Helmet>
			
			<section className="slider_section " >
				<div className="play_btn">
					<a href="">
						<img src={PLay} alt="Used furniture buyer Abu Dhabi" />
					</a>
				</div>

				<div className="container">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="0"
								className="active"
							></li>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="1"
							></li>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="2"
							></li>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="3"
							></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="row">
									<div className="col-md-6">
										<div className="detail-box">
											<span>LIFE STAR USED FURNITURE.</span>
											<h1>
												Used Furniture Buyer Abu Dhabi | Furniture Buyer Al Ain
											</h1>

											<p>
												We provide a variety of secondhand furniture buying and
												selling services for both residential and business
												customers. We purchase old furniture in Al Ain, as well
												as furniture for whole residences. We sell office
												furniture, Garden furniture, chairs, couches, a complete
												bedroom set, a dressing table, Dinning table, office
												equipments and much more. SO, if you have used furniture
												contact us and sell in easist way.
											</p>
											<div className="btn-box">
												<a href="tel:0503338692" className="btn-1">
													Call Now
												</a>
												<Link to="/contactus" className="btn-2">
													Contact us
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 img-container">
										<div className="img-box">
											<img src={Slider} alt="Used furniture buyer Abu Dhabi" />
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item ">
								<div className="row">
									<div className="col-md-6">
										<div className="detail-box">
											<span>LIFE STAR USED FURNITURE.</span>
											<h2>
												BUY AND SELL USED HOME APPLIANCES IN ABU DHABI | BEST
												SECONDHAND BUYERS IN AL IN
											</h2>

											<p>
												Are you looking for secondhand household appliances to
												buy and sell in Abu Dhabi and Al Ain? As a result, all
												things must be sold at a reasonable price. So don't
												worry, we're here to buy your used appliances. We deal
												with dishwashers, clothes dryers, drying cabinets,
												freezers, refrigerators, kitchen stoves, water heaters,
												washing machines, trash compactors, microwave ovens, and
												induction cooktops. So,contact now and sell in easiest
												way.
											</p>
											<div className="btn-box">
												<Link to="/about" className="btn-1">
													Read More
												</Link>
												<Link to="/contactus" className="btn-2">
													Contact us
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 img-container">
										<div className="img-box">
											<img
												src={Slider1}
												alt="Used home appliances buyer Abu Dhabi"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item ">
								<div className="row">
									<div className="col-md-6">
										<div className="detail-box">
											<span>LIFE STAR USED FURNITURE</span>
											<h2>
												BUY AND SELL USED AIR CONDITIONERS IN ABU DHABI | BEST
												SECONDHAND BUYERS IN AL AIN
											</h2>
											<p>
												Are you tired from your used air conditioners and want
												to buy new one? So don't worry, we're here to buy your
												used air conditioners. We deal every kind of Air
												Conditioners including <br></br>Split Air Conditioners.
												<br></br>
												Window Air Conditioners.<br></br> Portable Air
												Conditioners.<br></br> So, of you have used air
												Conditioners and want to sell with us then contact now.
											</p>
											<div className="btn-box">
												<a href="tel:0503338692" className="btn-1">
													Call Now
												</a>
												<Link to="/contactus" className="btn-2">
													Contact us
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 img-container">
										<div className="img-box">
											<img
												src={Slider2}
												alt="Used air conditioner buyer Abu Dhabi"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item ">
								<div className="row">
									<div className="col-md-6">
										<div className="detail-box">
											<span>LIFE STAR USED FURNITURE</span>
											<h2>
												BUY AND SELL USED HOUSEHOLD ITEMS IN ABU DHABI | BEST
												SECONDHAND BUYERS IN AL AIN
											</h2>

											<p>
												We Buy Different type of household items which include
												all kitchen equipment, House Equipment’s and all other
												necessary items at reasonable price. Therefore, We buy
												used household items in Abu Dhabi and Al Ain.Contact Now
												And sell your product in easiest way.
											</p>
											<div className="btn-box">
												<a href="tel:0503338692" className="btn-1">
													Call now
												</a>
												<Link to="/contactus" className="btn-2">
													Contact us
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 img-container">
										<div className="img-box">
											<img
												src={Slider3}
												alt="Used household items buyer Abu Dhabi"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<FaArrowCircleUp
					className="scrollTop"
					onClick={scrollTop}
					style={{ height: 40, display: showScroll ? "flex" : "none" }}
				/>
			</section>
		</>
	);
}

export default Home