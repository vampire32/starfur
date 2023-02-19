import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main_logo from '../images/main_loogo.png'

const mystyle = {
	textDecoration:"none",
	marginLeft:"20px",	
  };

const NavBar = (props) => {
    
  return (
	 
		<nav className={`navbar navbar-expand-lg  navbar-${props.theme}`}>
			<div className="container-fluid">
				<Link className={`navbar-brand text-${props.color}`} to="/">
					  <img src={Main_logo} alt="" width="108px" height="101px" class="d-inline-block align-text-top"/>
					STAR FURNITURE
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0  ml-auto  ">
						<li className="nav-item">
							<Link style={mystyle} className="nav-link  " aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link style={mystyle} className="nav-link " to="/about">
								About
							</Link>
						</li>
						<li className="nav-item dropdown ">
							<Link  style={mystyle}
								className="nav-link dropdown-toggle "
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Services
							</Link>
							<ul
								className="dropdown-menu px-10 text-[18px]"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link className="dropdown-item pb-3" to="/usedfurniture">
										Used Furniture
									</Link>
								</li>
								<li>
									<li></li>
									<Link className="dropdown-item pb-3" to="/homeappliances">
										Home Appliances
									</Link>
								</li>
								<li></li>
								<li>
									<Link className="dropdown-item pb-3" to="/usedaircondition">
										Used Air condition
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link  style={mystyle} className="nav-link " to="/contactus">
								Contact Us
							</Link>
						</li>
					</ul>
					<form  class="flex lg:justify-content-end center_item  ">
						<a style={{backgroundColor:"transparent",border:"1px solid white",textDecoration:"none",color:'black'}} href="tel:0503338692" class="button glow-button " type="submit">
							Call Now
						</a>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default NavBar
