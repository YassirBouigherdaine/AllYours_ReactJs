import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaUser, FaSlack, FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';








class NavBar extends Component {


	render() {

		return (

			<nav className="navbar navbar-expand-lg text-white navBarBg shadow-lg myText rounded ">
				<div className="container-fluid">

					<Link className="navbar-brand px-4 py-0 fs-4 me-5 hand-icon text-white" to="/Home" >
						<span className="text-warning fs-2 "><FaSlack className="px-1 fs-3" />All </span>Yours
					</Link>

					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class=" text-white"><FaBars/></span>
					</button>
					
						<div class="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">

								<li className="nav-item">
									<Link className="nav-link text-white px-4" to="/Home">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white px-4" to="/ShoppingCart">ShoppingCart</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white px-4" to="/Review">Reviews</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link text-white px-4" to="/Contact">Contact</Link>
								</li>
							    <li className="nav-item ms-5 me-5">
									<Link className="nav-link text-white " to="/Login"><FaUser/></Link>
							    </li>
							   

							<div className="position-absolute top-0 end-0 mt-3 me-4 d-inline d-none d-lg-block ">
								<a className=" text-white px-2" href="https://twitter.com"><FaFacebook /></a>
								<a className=" text-white px-2" href="https://facebook.com"><FaTwitter /></a>
								<a className=" text-white px-2" href="https://www.instagram.com/"><FaInstagram /></a>
							</div>
						</ul>

						</div>

					
				</div>


			</nav>
			
				
		);
	}

}

export default NavBar;