import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import t1 from "../images/t-1.jpg";
import t2 from "../images/t-2.jpg";
import t3 from "../images/t-3.jpg";
import t4 from "../images/t-4.jpg";
import t5 from "../images/t5.jpg";
import t6 from "../images/t6.jpg";
import t7 from "../images/t7.jpg";
import t8 from "../images/t8.jpg";
import t9 from "../images/t9.jpg";
import t10 from "../images/t10.jpg";
import t11 from "../images/t11.jpg";
import t12 from "../images/t12.jpg";
import t13 from "../images/t13.jpg";
import t14 from "../images/t14.jpg";
import t15 from "../images/t15.jpg";
import t16 from "../images/t16.jpg";

const Treding = () => {
    useEffect(() => {
			AOS.init({
				duration: 1500,
			});
		}, []);
	return (
		<section className="trending_section layout_padding   md:mt-[10rem] sm:mt-5">
			<div id="accordion">
				<div className="container">
					<div className="row">
						<div className="col-md-6" data-aos="fade-up">
							<div className="detail-box">
								<div className="heading_container">
									<h3>Trending Categories</h3>
								</div>
								<div className="tab_container">
									<div
										className="t-link-box"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										<div className="number">
											<h5>01</h5>
										</div>
										<hr />
										<div className="t-name">
											<h5>Chairs</h5>
										</div>
									</div>
									<div
										className="t-link-box collapsed"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										<div className="number">
											<h5>02</h5>
										</div>
										<hr />
										<div className="t-name">
											<h5>Tables</h5>
										</div>
									</div>
									<div
										className="t-link-box collapsed"
										data-toggle="collapse"
										data-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										<div className="number">
											<h5>03</h5>
										</div>
										<hr />
										<div className="t-name">
											<h5>Beds</h5>
										</div>
									</div>
									<div
										className="t-link-box collapsed"
										data-toggle="collapse"
										data-target="#collapseFour"
										aria-expanded="false"
										aria-controls="collapseFour"
									>
										<div className="number">
											<h5>04</h5>
										</div>
										<hr />
										<div className="t-name">
											<h5>Furnitures</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6" data-aos="fade-up">
							<div
								className="collapse show"
								id="collapseOne"
								aria-labelledby="headingOne"
								data-parent="#accordion"
							>
								<div className="img_container " data-aos="fade-right">
									<div className="box b-1">
										<div className="img-box">
											<img src={t1} alt="used chair in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t2} alt="used chair in Abu Dhabi" />
										</div>
									</div>
									<div className="box b-2">
										<div className="img-box">
											<img src={t3} alt="used chair in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t4} alt="used chair in Abu Dhabi" />
										</div>
									</div>
								</div>
							</div>
							<div
								className="collapse"
								id="collapseTwo"
								aria-labelledby="headingTwo"
								data-parent="#accordion"
							>
								<div className="img_container " data-aos="fade-right">
									
									<div className="box b-1">
										<div className="img-box">
											<img src={t5} alt="used table in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t6} alt="used table in Abu Dhabi" />
										</div>
									</div>
									<div className="box b-2">
										<div className="img-box">
											<img src={t7} alt="used table in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t8} alt="used table in Abu Dhabi" />
										</div>
									</div>
								</div>
							</div>
							<div
								className="collapse"
								id="collapseThree"
								aria-labelledby="headingThree"
								data-parent="#accordion"
							>
								<div className="img_container " data-aos="fade-right">
									
									<div className="box b-1">
										<div className="img-box">
											<img src={t9} alt="used bed buyer in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t10} alt="used bed buyer in Abu Dhabi" />
										</div>
									</div>
									<div className="box b-2">
										<div className="img-box">
											<img src={t11} alt="used bed buyer in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t12} alt="used bed buyer in Abu Dhabi" />
										</div>
									</div>
								</div>
							</div>
							<div
								className="collapse"
								id="collapseFour"
								aria-labelledby="headingfour"
								data-parent="#accordion"
							>
								<div className="img_container " data-aos="fade-right">
									
									<div className="box b-1">
										<div className="img-box">
											<img src={t13} alt="used furniture buyer in Abu Dhabi" />
										</div>

										<div className="img-box">
											<img src={t14} alt="used furniture buyer in Abu Dhabi" />
										</div>
									</div>
									<div className="box b-2">
										<div className="img-box">
											<img src={t15} alt="used furniture buyer in Abu Dhabi" />
										</div>
										<div className="img-box">
											<img src={t16} alt="used furniture buyer in Abu Dhabi" />
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

export default Treding;
