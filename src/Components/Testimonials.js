import React from "react";
import "../css/testimonials.css";

import AVTR1 from "../images/testimonals1.png";
import AVTR2 from "../images/testimonals2.png";
import AVTR3 from "../images/testimonals3.png";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
	const data = [
		{
			avatar: AVTR1,
			name: "Saif zada Saif",
			review:
				"Very easy to access your shop that's very helpful for us.",
		},
		{
			avatar: AVTR1,
			name: "Sandra A",
			review:
				"I highly recommend fairy of fortune used furniture. Items are just like brand new and at a reasonable prices. Yusuf was very polite, answered all questions asked about products. He gave warranty and recommended I stay in touch.",
		},
		{
			avatar: AVTR2,
			name: "Muhammad Sufyan",
			review:
				"Great collection, good quality, affordable prices and extra ordinary service. Good job!.",
		},

		{
			avatar: AVTR3,
			name: "muhammad anwar",
			review:
				"Kindly visit to this showroom and get various type of used furniture",
		},
		{
			avatar: AVTR1,
			name: "Sirod Attoliv",
			review:
				"affordable price, the customer very satisfied .",
		},
	];
	return (
		<section id="testimonials" className=" bg-slate-700 text-white pb-10">
			<h2 className=" text-center pt-10 ">Review from clients</h2>
			<h2 className=" text-center">Testimonials</h2>

			<Swiper
				className="container testimonials__container "
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="Testimonal images" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
