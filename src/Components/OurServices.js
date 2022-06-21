import React,{useEffect} from 'react'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
   const services = [
			{
				title: "Used Furnitures",
				descriptiion:
					"We buy and sell used furniture in Abu Dhabi. We deals with Used Bedroom Furniture,Used Bedroom sets,Used chest of drawers,Dressing and Bed Side Tables,Used Sofa and Sofa bed,Used Arabic Majlis,Bar and Bar Stood,Garden furniture and office chair.",
				img: icon1,
				link: "/usedfurniture",
			},
			{
				title: "Used Home Appliances",
				descriptiion:
					"We buy and sell used Home Appliances in Abu Dhabi. e deal with dishwashers, clothes dryers, drying cabinets, freezers, refrigerators, kitchen stoves, water heaters, washing machines, trash compactors, microwave ovens, and induction cooktops.",
				img: icon2,
				link: "/homeappliances",
			},
			{
				title: "Used Air Conditioner",
				descriptiion:
					"We buy and sell used Air Conditioners in Abu Dhabi. We deal every kind of Air Conditioners includingSplit Air Conditioners, Window Air Conditioners, Portable Air Conditioners.So, of you have used air Conditioners and want to sell with us then contact now.",
				img: icon3,
				link: "/usedaircondition",
			},
		];
  return (
		<div className="services_section layout_padding bg-white ">
			<div className="container">
				<h1 className="services_taital" data-aos="fade-in">
					our services
				</h1>
				<p className="many_taital" data-aos="fade-in">
					Relaible And Trustworthly Services in Abu dhabi{" "}
				</p>
				<div className="services_section2 layout_padding" data-aos="fade-up">
					<div className="row  company-title">
						{services.map((item) => (
							<div key={item.title} className="col-lg-4 col-sm-6 pb-10">
								<div className="icon_1">
									<img className="img_adjust" src={item.img} alt="Used furniture buyer Abu Dhabi" />
								</div>
								<h2 className="furnitures_text">{item.title}</h2>
								<p className="dummy_text">{item.descriptiion}</p>
								<div className="read_bt_main">
									<div className="read_bt">
										<Link to={item.link}>Read More</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurServices