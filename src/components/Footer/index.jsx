import React from "react";
import { Link } from "react-router-dom";
// Other impoerts
import { FontIcons } from "#constants/icons"

export const Footer = (props) => {
    return ( 
    <React.Fragment>
       <footer >
        <div className="container-fluid py-5 bg-dark">

					<div className="row mx-0 mx-xl-4">

						<Link to="/" className="navbar-brand text-light text-start mb-3">Colin Steidtmann</Link>

						<div className="col-12 col-sm-6 mb-3 text-start">
							<span className="fw-light text-secondary">Content</span>							
							<div className="navbar-nav">
								<a className="nav-link text-light py-0" href="/#about">About</a>
								<a className="nav-link text-light py-0" href="/#socials">Socials</a>
								<a className="nav-link text-light py-0" href="/#blogsAndProjects">Blogs and Projects</a>
								<Link className="nav-link text-light py-0" to="/contact">Contact</Link>
							</div>
						</div>

						<div className="col-12 col-sm-6 mb-3 text-start">
							<span className="fw-light text-secondary">Contact</span>
							<div className="navbar-nav text-light">
								<a className="nav-link text-light py-0" href="mailto:contact@colinsteidtmann.com">{FontIcons.envelope} contact@colinsteidtmann.com</a>
							</div>
						</div>


						<hr className="text-light mt-3"/>
						<p className="text-end text-light mb-0">
							&copy; {new Date().getFullYear()}
						</p>
					</div>
				</div> <
        /footer>

        </React.Fragment>
    );
};

export default Footer;