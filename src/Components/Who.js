import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Who = () => {
	useEffect(() => {
		AOS.init({
			duration: 3000,
		});
	}, []);
  return (
		<div className="who_section layout_padding  ">
			<div className="container">
				<span className="who_taital" data-aos="fade-in">
					who we are ?
				</span>
				<h2 className="designer_text text-secondary" data-aos="fade-in">
					USED FURNITURE BUYERS Abu Dhabi
				</h2>
				<p className="lorem_ipsum_text" data-aos="fade-in">
					Star used furniture has been in the industry for many years. We know
					what we’re doing since we purchase and sell secondhand furniture and
					appliances. Our firm has high standards for our products and services
					as used furniture for sale Abu Dhabi and Al Ain firm, and we strive to
					meet them with you in mind. When it comes to selling and purchasing
					furniture, there are many factors to consider, one of which is that
					Star used furniture should offer furniture that fits within our
					budget. This is why purchasers have their own methods for making their
					office and house look new and different. They are first selling their
					outdated furniture, following which they will purchase new furniture
					for their business and house. They may utilise the money from their
					second-hand furniture to purchase new furniture in Abu Dhabi.<br></br>
					<br></br>
					We're willing to buy your furniture if you wish to sell it. All you
					have to do is call, and we'll come to your house and look at your
					furniture, after which we'll give you the greatest furniture value on
					the market. We are always willing to bargain with customers. So, what
					are you waiting for? Just open your phone and go to
					starusedfurniture.com or send us a WhatsApp message.
				</p>
			</div>
			<div className="get_bt_main">
				<div className="get_bt">
					<Link to="/contactus">Get A Quote</Link>
				</div>
			</div>
		</div>
	);
}

export default Who
