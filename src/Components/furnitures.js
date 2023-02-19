import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Furniture = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<section className="ui-section-feature">
			<div className="ui-layout-container">
				<p
					style={{ fontSize: "30px" }}
					className="text-center sm:text-[20px]"
					data-aos="fade-up"
				>
					{props.heading}
				</p>
				<p className=" text-center " data-aos="fade-up">
					Buy and Sell used furniture in Abu Dhabi
				</p>
				<div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2 pb-24">
					<img
						src={props.img}
						alt="Used furniture buyer Abu Dhabi"
						className=" h-[400px]  rounded-2xl"
						data-aos="fade-up"
					/>

					<div data-aos="fade-up" className="text-justify lg:w-[30vw]">
						<h2 className="text-[32px] sm:text-[22px] mb-5">{props.Name}</h2>
						<p className="ui-text-intro leading-10">{props.desc}</p>
						<p className="ui-text-intro mt-3">{props.desc2nd}</p>
						<p className="ui-text-intro mt-3">{props.desc3nd}</p>
						<p className="ui-text-intro mt-3">{props.desc4nd}</p>
						<ul className="ui-component-list ui-component-list-feature ui-layout-grid m-8">
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l1}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l2}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l3}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l4}
							</li>
						</ul>
					</div>
				</div>
				<div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
					<div data-aos="fade-up" className="text-justify">
						<h2 className="text-[32px] sm:text-[22px] mb-5">{props.Name2}</h2>
						<p className="ui-text-intro leading-10">{props.desc2}</p>
						<ul className="ui-component-list ui-component-list-feature ui-layout-grid mt-8">
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l11}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l22}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l33}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l44}
							</li>
						</ul>
					</div>
					<img
						src={props.img2}
						alt="Furniture buyer Abu Dhabi"
						className=" h-[400px] w-100  rounded-3xl ml-5 "
						data-aos="fade-up"
					/>
				</div>
				<div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2 mt-10">
					<img
						src={props.img3}
						alt="Used furniture buyer al ain"
						className={`h-[400px] w-100  rounded-3xl `}
						data-aos="fade-up"
					/>

					<div data-aos="fade-up" className="text-justify lg:w-[30vw]">
						<h2 className="text-[32px] sm:text-[22px] mb-5">{props.Name3}</h2>
						<p className="ui-text-intro leading-10">{props.desc3}</p>
						<ul className="ui-component-list ui-component-list-feature ui-layout-grid mt-8">
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l13}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l23}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l34}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l43}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Furniture;
