import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Floating = () => {
  return (
		<>
			<a href="tel:+971503338692" class="float2">
				<AiFillPhone class="fa fa-plus my-float"></AiFillPhone>
			</a>
			<a href="https://wa.me/+971503338692" target="_blank" class="float">
				<BsWhatsapp class="fa fa-plus my-float"></BsWhatsapp>
			</a>
		</>
	);
}

export default Floating
