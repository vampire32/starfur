
import React, { useEffect } from "react";
import AOS from "aos";
import "../css/posterdownRes.css";
import "aos/dist/aos.css";
import '../css/posterdown.css'



const PosterDown = () => {
     useEffect(() => {
				AOS.init({
					duration: 1500,
				});
			}, []);
  return (
		<div className="building">
			<div className="container">
				<div className="row" data-aos="fade-in">
					<div className="col-md-12">
						<div className="titlepage">
							<h2 className="yello">
								We buy all kinds of used furniture in Abu Dhabi
							</h2>
							<p>
								As you can see on our website, Mussafah has a huge secondhand
								furniture market. We have a number of shops in various areas
								that provide valuable services to anyone looking to buy or sell
								old furniture. We provide mainly two kinds of second-hand
								furniture services like [Commercial Furniture & Residential
								Furniture].
							</p>
							<h2 className="yello">Commercial Used Furniture in Abu Dhabi</h2>
							<p>
								We buy and sell used office, hotel, and retail furniture, among
								other things. For example, we purchase office furniture such as
								tables, chairs, and sofas, as well as office meeting tables,
								work stations, used office file cabinets, and used reception
								tables and chairs. And in Hotels and Shops second-hand dining
								and tea tables, cupboards, and used showcases
							</p>
							<h2 className="yello">
								Residential Used Furniture buyers in Abu Dhabi
							</h2>
							<p>
								We buy secondhand house furniture, apartment furniture, and
								complete villa furniture. We buy and sell many types of house
								furniture, such as old bedroom furniture, tables and cupboards,
								villa furniture, and so on.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PosterDown