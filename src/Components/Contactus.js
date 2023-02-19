import React,{useEffect} from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet-async"

const Contactus = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
  return (
		<>
			<Helmet>
				<title>{props.Htitle}</title>
				<meta
					
					name="description"
					content="We are star used furniture buyers in abu dhabi. contact us for selling aand buying used items.0503338692"
				></meta>
				<link rel="canonical" href={props.Hlink} />
			</Helmet>

			<div className="container mt-10 pb-10">
				<div className=" row centered" data-aos="fade-up">
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center  text-black pt-4  drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem", height: "16rem" }}
						>
							<MdOutlineEmail className="contact__option-icon text-[#d9c7a4]   ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h3 className="card-title">Email</h3>
								<h3>info@starfurniture.com</h3>
								<a
									style={{ color: "black", textDecoration: "none" }}
									href="mailto:info@starfurniture.com"
									target="_blank"
								>
									Send a message
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center  text-black pt-4  drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem", height: "16rem" }}
						>
							<BsWhatsapp className="contact__option-icon text-[#d9c7a4] ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h4>WhatsApp</h4>
								<h5>0503338692</h5>
								<a
									style={{ color: "black", textDecoration: "none" }}
									href="https://api.whatsapp.com/send?phone+03469413675"
									target="_blank"
								>
									Send message{" "}
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center  text-black pt-4  drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem", height: "16rem" }}
						>
							<GoLocation className="contact__option-icon text-[#d9c7a4] ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h4>Address</h4>
								<h5>
									Ad Doja 2 St - Musaffah - Musaffah Industrial - Abu Dhabi -
									United Arab Emirates
								</h5>
								<span>Visit Now </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contactus