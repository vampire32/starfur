import React,{useEffect} from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactus = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
  return (
		<>
			<div className="container mt-10 pb-10">
				<h1 className="text-center text-[2.5rem] mb-5">{props.heading}</h1>
				<div className=" row centered" data-aos="fade-up">
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center  text-black pt-4  drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem", height: "16rem" }}
						>
							<MdOutlineEmail className="contact__option-icon text-[#d9c7a4]   ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h5 className="card-title">Email</h5>
								<h5>info@starfurniture.com</h5>
								<a style={{color:"black",textDecoration:"none"}} href="mailto:info@starfurniture.com" target="_blank">
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
								<a style={{color:"black",textDecoration:"none"}} 
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
								<h5>Musaffah - Mussafah 39 - Abu Dhabi - United Arab Emirates</h5>
								<span >Visit Now </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contactus