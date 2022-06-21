import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Poster2.css";
import IMG from "../images/pc.png";
import "../css/posterdownRes.css";

const Poster2 = () => {
     useEffect(() => {
				AOS.init({
					duration: 1500,
				});
			}, []);
	return (
		<div className="instant mt-5 lg:mb-[10rem] sm:mb-0 ">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6" data-aos="fade-up">
						<div className="titlepage text_align_left">
						
							<h2 style={{color:"yellow"}}>
							Ikea  <span className="text-white">Furniture Buyers Abu Dhabi</span>{" "}
							</h2>
							<p className="text-justify">
							We buy and sell a variety of Ikea furniture in good condition in Abu Dhabi.
As a result, we buy used furniture in Abu Dhabi and deal with used mattresses, armoires & wardrobes, tables & desks, chairs, TV & media furniture, dressers & storage drawers, bar furniture, and many other items.
if you want to purchase or sell ikea furniture in Abu Dhabi mussafah, then do not hesitate to contact us.
							</p>
							<form  class="flex lg:justify-content-end center_item   ">
						<a href="tel:0503338692" class="button glow-button btn-design  " type="submit">
							Call Now
						</a>
					</form>
							{/* <a className="read_more" href="#">
								Get A quote
							</a> */}
						</div>
					</div>
					<div className="col-md-6" data-aos="fade-up">
						<div className="instant_img">
							<figure>
								<img src={IMG} alt="Used furniture buyer Abu Dhabi" />
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Poster2;
