import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../css/poster.css";

const Poster = (props) => {
    useEffect(() => {
			AOS.init({
				duration: 1500,
			});
		}, []);
	return (
		<section id="about" className="about-area pt-5">
			<div className="container">

			<p style={{fontSize:"40px"}} className="text-black text-center">
								More <span style={{color:"#d9c7a4"}}>About</span>{" "}
							</p>
							<div className="border"></div>
				<div className="accordion " id="accordionExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button
								className="accordion-button C"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								{props.title}
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<div className="row" data-aos="fade-up">
									<div className="col-lg-6">
										<div className="about-content mt-45">
											<h2 className="text-[#d9c7a4]">{props.title}</h2>
											<p style={{fontWeight:"bold"}} className=" mt-2 text-black">Reasons to choose</p>

											<p className="mt-2 pb-5">{props.desc}</p>
											<h2 className=" text-[#d9c7a4]">{props.title2}</h2>
											<p className=" mt-2 pb-5 text-justify ">{props.desc2}</p>

											<a className="btnn " href="tel:0503338692">
												Call Now
											</a>
										</div>
									</div>
									<div className="col-lg-6 flex justify-center mt-[2rem]">
										<div className="about-image mt-50 clearfix">
											<div className="single-image float-left">
												<p className=" p-[100px] text-white ">{props.imgdesc}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed font-bold"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								{props.title3}
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<div className="row mt-28" data-aos="fade-right">
									<div className="col-lg-6 flex justify-center">
										<div className="about-image mt-50 clearfix">
											<div className="single-image1 float-left">
												<p className=" p-[100px] text-white">{props.imgdesc2}</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 ">
										<div className="about-content ">
											<h2 className="text-[#d9c7a4]">{props.title3}</h2>
											<p style={{fontWeight:"bold"}} className=" mt-2 text-black">Reasons to choose</p>
											<p className=" mt-2 pb-5 text-justify">{props.desc3}</p>
											<h2 className="text-[#d9c7a4]">{props.title4}</h2>
											<p className=" mt-2 pb-5 text-justify">{props.desc4}</p>
											<a className="btnn" href="tel:0503338692">
												Call Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed font-bold"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								{props.title5}
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse show"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body ">
								<div className="row" data-aos="fade-up">
									<div className="col-lg-6">
										<div className="about-content mt-45">
											<h2 className="text-[#d9c7a4]">{props.title5}</h2>
											<p style={{fontWeight:"bold"}} className=" mt-2 text-black">Reasons to choose</p>

											<p className=" mt-2 pb-5 text-justify">{props.desc5}</p>
											<h2 className=" text-[#d9c7a4]">{props.title6}</h2>
											<p className=" mt-2 pb-5 text-justify ">{props.desc6}</p>

											<a className="btnn " href="tel:0503338692">
												Call Now
											</a>
										</div>
									</div>
									<div className="col-lg-6 flex justify-center mt-[2rem]">
										<div className="about-image mt-50 clearfix">
											<div className="single-image2 float-left">
												<p className=" p-[100px] text-white">{props.imgdesc5}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingFour">
							<button
								className="accordion-button collapsed font-bold"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
								aria-expanded="false"
								aria-controls="collapseFour"
							>
								{props.title7}
							</button>
						</h2>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							aria-labelledby="headingFour"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<div className="row mt-28" data-aos="fade-right">
									<div className="col-lg-6 flex justify-center">
										<div className="about-image mt-50 clearfix">
											<div className="single-image3 float-left">
												<p className=" p-[100px] text-white">{props.imgdesc6}</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 ">
										<div className="about-content ">
											<h2 className="text-[#d9c7a4]">{props.title7}</h2>
											<p style={{fontWeight:"bold"}} className=" mt-10 text-black">Reasons to choose</p>
											<p className=" mt-2 pb-5 text-justify">{props.desc7}</p>
											<h2 className="text-[#d9c7a4]">{props.title8}</h2>
											<p className=" mt-2 pb-5 text-justify">{props.desc8}</p>
											<a className="btnn" href="tel:0503338692">
												Call Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Poster;
