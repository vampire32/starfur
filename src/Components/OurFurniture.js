import React, {useEffect} from 'react'
import img1 from '../images/img-1.webp'
import img2 from '../images/img-2.png'
import img3 from '../images/img3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const OurFurniture = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
  return (
		<div className=" mt-[50rem] pb-[10rem]">
			<section className="  text-white">
				<h3 className="  services_taital mt-5" data-aos="fade-up">
					What's More
				</h3>

				<p className=" text-center " data-aos="fade-in">
					USED HOUSEHOLD ITEMS
				</p>
				<div className=" row g-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 pt-16">
					<div className=" col-md-5  ">
						<img className="furniture_imge" data-aos="fade-right" src={img1} alt="Used furniture buyer Abu Dhabi" />
					</div>

					<div className=" col-md-1  "></div>

					<div className=" col-md-5 text-center " data-aos="fade-right">
						<h2 className=" font-bold">
							USED FURNITURE IN ABU DHABI
						</h2>
						<p className=" text-justify pb-10 ">
							Do you want to purchase and sell used furniture in Abu Dhabi? Do
							you wish to sell your office or home furniture? As a result, all
							things must be sold at a reasonable price. We are Star Used
							Furniture, and we are ready to come to your workplace or home,
							wherever in Abu Dhabi, to inspect your furniture and give you an
							estimate of the actual price of each item. The furniture has a
							significant monetary worth to us. If you want to buy something,
							you can visit our shop in Mussafah, Abu Dhabi. If you're looking
							to sell your furniture, you've come to the right place.
						</p>
						<a href="tel:0503338692" data-aos="fade-up" className="btnnn">
							CALL NOW
						</a>
					</div>
				</div>

				<div
					className=" row g-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 pt-16"
					
				>
					<div className=" col-md-5 text-center" data-aos="fade-right">
						<h2>USED HOME APPLIANCES IN ABU DHABI </h2>
						<p className="text-justify pb-10 ">
							We buy and sell used home appliances in abu dhabi and al ain. We
							deals with every kind of home appliances for buy and sell
							including dishwashers, clothes dryers, drying cabinets, freezers,
							refrigerators, kitchen stoves, water heaters, washing machines,
							trash compactors and more. So, if you tired from your used home
							applainces and want to buy new one from market then you can sell
							to us at fixed price. <br></br> Contact now and save your time and
							budget.
						</p>
						<a href="tel:0503338692" className="btnnn">
							CALL NOW
						</a>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 " data-aos="fade-right">
						<img className="furniture_imge " src={img2} alt="Used home appliances buyer Abu Dhabi" />
					</div>
				</div>

				<div
					className=" row g-0 row g-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 pt-16 "
					data-aos="fade-right"
					
				>
					<div className=" col-md-5 ">
						<img className="furniture_imge " src={img3} alt="Used household item buyer Abu Dhabi"/>
					</div>
					<div className=" col-md-1 "></div>
					<div className=" col-md-5 text-center pt-10">
						<h2>USED HOUSEHOLD ITEMS IN ABU DHABI</h2>
						<p className="text-justify pb-10 ">
							We buy and sell used household items in abu dhabi and al ain. We
							deals with every kind of household items for buy and sell include
							all kitchen equipment, House Equipment’s and all other necessary
							items at reasonable price.
							<ul className="list-disc ml-8">
								<li>kitchenware</li>
								<li>furniture</li>
								<li>clothing</li>
								<li>bedding</li>
								<li>books</li>
								<li>tools</li>
								<li>and many more.</li>
							</ul>
							Contact now and sell your used household items.
						</p>
						<a href="tel:0503338692" className="btnnn">
							CALL NOW
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default OurFurniture
