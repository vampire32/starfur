import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Ready = () => {
  	useEffect(() => {
			AOS.init({
				duration: 1500,
			});
		}, []);
  return (
		<section className="ui-section-close overflow-hidden">
			<div className="row overflow-hidden">
				<div className=" col-lg-6 col-md-8 lg:ml-8 sm:ml-0 " data-aos="fade-in">
					<h3 className="text-[2.5rem] font-bold text-white">Call us Now</h3>
					<h3 className="text-danger text-[2.8rem] font-weight-bold">0503338692</h3>
					<p className="ui-text-intro">
						All you have to do is phone or email us for an appoinment and our
						assessment specilat will visit to your home to take a closer look at
						your selling items.Dont waste any more time adverstsing it on
						various platfrom call us right now and let us accquire it from you.
					</p>

					<div className="ui-component-cta ui-layout-flex mt-5 ">
						<a
							href="tel:0503338692"
							
							className="ui-component-button ui-component-button-normal ui-component-button-primary  "
						>
							Call Now
						</a>
						
					</div>
				</div>
				{/* <div className="col-lg-4 col-md-6">
					
				</div> */}
			</div>
		</section>
	);
}

export default Ready
