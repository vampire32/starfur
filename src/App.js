import "./App.css";
import React,{useEffect,useState} from 'react'
import "./css/style.css";
import "./css/responsive.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Kitchen from './images/kitchen-removebg-preview.png'
import Household from "./images/household.jpg";
import Tvs from "./images/tvs-removebg-preview.png";
import Split from './images/Split-removebg-preview.png'
import Portable from './images/Portable.jpg'
import General from './images/general-removebg-preview.png'

import OurServices from "./Components/OurServices";
import Ourcompany from "./Components/Ourcompany";
import Who from "./Components/Who";
import OurFurniture from "./Components/OurFurniture";
import Treding from "./Components/Treding";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Furniture from "./Components/furnitures";
import Ready from "./Components/ready";
import Contact2 from "./Components/Contact2";
import About from "./Components/About";
import Services from "./Components/Services";
import Contactus from "./Components/Contactus";
import Floating from "./Components/Floating";
import Poster from "./Components/Poster";
import PosterDown from "./Components/PosterDown";
import Poster2 from "./Components/Poster2";
import Testimonials from "./Components/Testimonials";







function App() {
	
	return (
		<React.Fragment>
			<Router>
				{/* <NavBar /> */}

				<Switch>
					<Route exact path="/">
						<div className="hero_area">
							<NavBar theme="light" color="black" />

							<Home HLink="/" />
						</div>

						<Contactus />
						<OurServices />
						<Who />
						<OurFurniture />
						<PosterDown />
						<Ourcompany />
						<Poster
							title="Used Bedroom Furniture in Abu Dhabi"
							desc="We purchase and sell used furniture in Abu Dhabi. For instance, we buy and sell beds, cupboards, tables, and a variety of other used furniture in Abu Dhabi."
							imgdesc="Bedroom Furniture | Bedroom Sets | Home Furniture | Used Furniture "
							title2="Used Bedroom sets in Abu Dhabi"
							desc2="We offer a variety of services for buying used furniture in Mussafah. If you're looking to sell a used bedroom set, we'll buy it from you. Simply give us photos, and we'll come to your house to pick it up and pay you."
							imgdesc2=" chest of drawers | Dressing | Bedside Tables | Showcase."
							title3="Used chest of drawers In Abu Dhabi"
							desc3="We are used furniture buyers in Abu Dhabi who purchase and sell good condition chests of drawers at a fair price. We buy various types of old furniture, including IKEA, regular, and royal. In Abu Dhabi, we have a number of locations where you may purchase or sell old products"
							title4="Dressing and Bedside Tables in Abu Dhabi"
							desc4="We are used furniture buyers who purchase and sell dressing tables and side tables in Abu Dhabi. If you want to sell your dressing table, it should be in good condition, with a clear mirror and other glassware. Bedside tables should be used with the bed to make it more comfortable."
							title5="Used Living Room Furniture Abu Dhabi"
							desc5="We offer services for selling and buying old living room furniture (sofa set for sale, sell second-hand sofa or buy a sofa, sell dining table, sell chairs, sell tea table or study table, sell cupboard)."
							imgdesc5="Bedside Tables | Sofa | Sofa bed | Chairs"
							title6="Used Sofa and Sofa bed in Abu Dhabi"
							desc6="If you don't have a sofa in your living room, it's not a comfortable existence. It doesn't matter if it's a used or new sofa; it must be in your living room. If you are searching to purchase or sell a sofa or a sofa bed, you have arrived at the right location and believe that this is the place where you may realize your desires."
							imgdesc6="Armchair | Bar Stools | Sofaset | Office Chair."
							title7="Used Armchair in Al Ain mussafah"
							desc7="Do you want to buy or sell a used or secondhand armchair? If the answer is yes, then you've come to the right place. Check out our services page and get in touch with us as soon as possible to purchase or sell used furniture in Abu Dhabi."
							title8="Bar and Bar Stools Abu Dhabi"
							desc8="We offer a variety of used furniture purchase and sell services, as well as a variety of furniture types. We also buy and sell a variety of household things. We also buy used bar tables and bar stools, and if you're looking to buy, then we have them in our Mussafah furniture store. Just contact us and we'll send you photographs via WhatsApp or you can come to our Used furniture store in Mussafah."
						/>

						<Poster2 />

						<Treding />
						<Testimonials />
						<Contact />
					</Route>
					<Route exact path="/usedfurniture">
						<Landingpage
							topname="Star Used Furniture"
							secondryname=" Used Furniture For Sale Abu Dhabi | Star Used Furniture"
							thirdname="Home Furniture | Office Furniture | Garden Furniture"
							desc="We are Star Used Furniture in Abu dhabi and Al ain. We buy and sell used furnitures include Royal furniture , Normal Furniture, Ikea Furniture and many more. We have different collections of used furniture for buy and sell. Visit now or contact us."
							HLink="/usedfurniture"
							Htitle="Used furniture for sale abu dabhi | star furniture al ain"
						/>
						<Contactus />
						<Furniture
							heading="Used Furnitures"
							img="https://sc01.alicdn.com/kf/HTB1nM6DcPfguuRjSszcq6zb7FXaj/200652641/HTB1nM6DcPfguuRjSszcq6zb7FXaj.jpg"
							img2="https://sc01.alicdn.com/kf/H1a59ac246d70491cb8551b14b28952b2W/226929769/H1a59ac246d70491cb8551b14b28952b2W.jpg_.webp"
							img3="https://cdn.mos.cms.futurecdn.net/FFC3Z36PbY3f8ZwykrBraD.jpg"
							Name="Royal Furnitures Abu Dhabi"
							Name2="Office Furniture Abu Dhabi"
							Name3="Garden Furniture Abu Dhabi"
							desc="In Abu Dhabi, we purchase and sell many types of Royal Furniture in good condition. "
							desc2nd="Basically, we buy used furniture in Abu Dhabi because Royal Furniture offers high-quality furniture with a lifetime warranty against any defects. not only this but also, Royal furniture includes a wide range of hardwood furniture styles and designs that are stylish, appealing, and luxurious."
							desc3nd="This type of furniture contain. Sofa Set – Bedroom Furniture, Wooden Carved Royal Bedroom Furniture , Traditional Furniture, Vendome Bedroom Set, Katy Furniture ,Vail Queen Bedroom Set and many more."
							desc4nd="So, if you have mind to buy or sell any royal furniture then we are the best used furniture buyers in Abu Dhabi and Al Ain."
							desc2="Star Used Furnture is a leading, Abu Dhabi-based Shop, designer and supplier of modern office furniture. Committed to provide workplace furniture that delivers great value by combining modern design, dependable quality and exceptional service. We Buy and Sell Office Desks | Director's Desks | Writing Desks | Conference Tables | Office Chairs
							 | Office Chairs and many more. So, If you have any office furniture and want to sell to us? We are available for you with best buying and selling prices. "
							desc3="We buy and sell all varieties of used Garden Furniture. We’ll offer you pay for your used products, no matter how big or little they are. You may also purchase items from our website to enhance the attractiveness of your larger and smaller areas. Make the most of it by creating stunning designs. We purchase all kinds of secondhand outdoor furniture, including chairs, tables, and other items! For less than half the price, you may now possess a brand new product. Now is the time to contact us! "
							l1="Best Condition."
							l2="Cheap Prices."
							l3="Fast Services"
							l4="24/7 support."
							l11="Quality Material."
							l22="Best Condition."
							l33="Cheap Prices"
							l44="24/7 support."
							l13="Best Condition"
							l23="Cheap Prices"
							l34="Modern Design"
							l43="24/7 support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/homeappliances">
						<Landingpage
							HLink="/homeappliances"
							Htitle="Home Appliances for sale abu dabhi | star furniture al ain"
							topname="Star Used Furniture"
							secondryname="Used Home Appliances For Sale Abu Dhabi | Star Used Furniture  "
							thirdname="Home Appliances | Refrigerator | Washing machine | Microwave oven"
							desc="We are Star Used Furniture in Abu dhabi and Al ain. We buy and sell used home appliances include Drying machine, Dishwasher, Microwave oven, Freezer etc. We have different collections of used home appliances for buy and sell. Visit now or contact us."
						/>
						<Contactus />
						<Furniture
							heading="Home Appliances Buyer Abu dhabi"
							img={Kitchen}
							img2={Household}
							img3={Tvs}
							Name3="Digital TV"
							Name="Kitchen Equipments"
							Name2="Household items"
							desc="Star Furnitures specializes in the designing of commercial kitchens & the supply of their kitchen equipments for all areas of the hospitality industry, including restaurants, public houses, hotels, care homes, schools, colleges & the public sector. We are based in UAE. With our expertise in project management and our advanced kitchen design product knowledge, gained from many years working in the food service equipment sector, you can rest assured that you are in safe hands when working with Star Furnitures. "
							desc2="We Buy Different type of household items which include all kitchen equipment, House Equipment’s and all other necessary items at reasonable price. Therefore, We buy used household items in Abu Dhabi and Al Ain.
Contact Now And sell your product in easiest way. "
							desc3="Get ready for the ultimate viewing experience with the smart tv. Enjoy a high-quality audio and video experience with the ultra UHD tv. Choosing a TV can be confusing with options like OLED tv, qled tv, and HD tv. Different screen sizes and resolutions make your decision challenging. The smart tv price in UAE is surprisingly affordable, and you can shop online at Sharaf DG for some fabulous deals.
							Finding the best tv in UAE is simple, log on to Sharaf DG. You can get affordable 4k HD tv from the world's best TV brands here. Take your pick from Sony tv, Samsung tv, or LG tv. You need to check the screen resolution, contrast ratios, and screen size when selecting the best 4K Ultra-HD TV. "
							l1="Best Condition."
							l2="Cheap Prices."
							l3="Fast Services"
							l4="24/7 support."
							l11="Quality Material."
							l22="Best Condition."
							l33="Cheap Prices"
							l44="24/7 support."
							l13="Best Condition"
							l23="Cheap Prices"
							l34="Modern Design"
							l43="24/7 support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/usedaircondition">
						<Landingpage
							HLink="/usedaircondition"
							Htitle="Used AirCondition for sale abu dabhi | star furniture al ain"
							topname="Star Used Furniture"
							secondryname="Used Air Conditioners For Sale Abu Dhabi | Star Used Furniture"
							thirdname="Split Air Conditioner | General Air Conditioner | Window Air Conditioner | Inverter Air Conditioner"
							desc="We are Star Used Furniture in Abu dhabi and Al ain. We buy and sell used Air conditioners with best prices. We deals with different kind of Air Conditioners in abu dhabi. We have different collections of used Air condiitoners for buy and sell. Visit now or contact us."
						/>
						<Contactus />
						<Furniture
							heading=" Used Air Conditions buyer Abu Dhabi "
							img={Split}
							img2={Portable}
							img3={General}
							Name="Split Air Conditioner"
							Name2="Portable Air Conditioner "
							Name3="General Air Conditioner"
							desc="Split ACs are the orthodox ACs that nowadays are being used in most of the households. These ACs are relatively low in cost and magnificent in cooling the atmosphere. Long story short, these ACs are a perfect combination of price and performance.

So, If you tired from your old Air Conditioner then we are available to you. Sell/Buy now and get good margin. "
							desc2="Portable Air Conditioners are the movable ACs that consist of hose pipes that can dispense water through almost any open window. They are small in their sizes, though, are brilliant for cooling a single room.

So, If you tired from your old Air Conditioner then we are available to you. Sell/Buy now and get good margin.  "
							desc3="General ACs are the traditional ACs that have the power of cooling the entire room within minutes. Sell And Buy any air conditioner from Fairy Of Fortune today."
							l1="Best Condition."
							l2="Cheap Prices."
							l3="Fast Services"
							l4="24/7 support."
							l11="Quality Material."
							l22="Best Condition."
							l33="Cheap Prices"
							l44="24/7 support."
							l13="Best Condition"
							l23="Cheap Prices"
							l34="Modern Design"
							l43="24/7 support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/about">
						<About />
						<Ready />
					</Route>
					<Route exact path="/services">
						<Services />
					</Route>
					<Route exact path="/contactus">
						{/* <Contact/> */}
						<NavBar theme="light" color="black" />
						<Contactus
							heading="Contact Us"
							Htitle="Contact us | star used furniture"
							HLink="/contactus"
						/>
						<Contact />
					</Route>
					{/* <Route exact path='/poster'>
						<Poster/>

					</Route> */}
				</Switch>
				<Floating />

				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
