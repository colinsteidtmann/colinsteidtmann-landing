import React from "react";
import { Link } from "react-router-dom";
// components

export const Navbar = (props) => {
    return (
        <div className="mx-0 px-sm-3">
			{/* ==== Main Navbar ==== */}
			<nav className="navbar navbar-light bg-light">
			  <div className="container-fluid ">
			    {props.children}
			  </div>
			</nav>
		</div>
    )

}



export const Header = () => {
    return ( <React.Fragment>

        <Navbar >

				<div className="col-12 col-sm-6 text-sm-start"> 
					<Link className="navbar-brand me-0" to="/">
						Colin Steidtmann
					</Link>
				</div>

				<div className="col-12 col-sm-6 mt-3 mt-sm-0">
					<div className="d-flex justify-content-center justify-content-sm-end">
						<Link className="nav-link text-dark px-sm-2 px-lg-3" to="/contact">Contact</Link>

					</div>
				</div>
			</Navbar>



        </React.Fragment>
    );
}

export default Header;