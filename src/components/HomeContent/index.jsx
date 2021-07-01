import React from "react";
import {Link} from "react-router-dom";
// Components
import {Accordian} from "#components";
import AboutSocials from "./AboutSocials";
import BlogsAccordian from "./BlogsAccordian";
import BusinessesAccordian from "./BusinessesAccordian";
import WorkAccordian from "./WorkAccordian";
import EducationAccordian from "./EducationAccordian";
import ProjectsAccordian from "./ProjectsAccordian";
import HobbiesAccordian from "./HobbiesAccordian";
// Other imports
import {DriveImgLink} from "#constants/functions";

export const HomeContent = () => {
	return (
		<React.Fragment>
			<div className="row text-start">

				<div className="col-8 col-lg-4 my-3 px-4 px-lg-5">
					<img 
						src={DriveImgLink("1NWI3B-NmTosR3Aeib6rcbTqTPL3KsLUU")} 
						className="img-fluid" 
						alt="Picture of Colin"
						loading="lazy"
					/>

				</div>
				<div className="col-12 col-lg-8 my-3 px-4 px-lg-5">
					<AboutSocials />
				</div>
			</div>

			<div className="row mt-5" id="blogsAndProjects" style={{"minHeight":"100vh"}}>
				<div className="col-12 col-lg-6 text-start px-4">
					<h4 className="fw-light">
						Blogs &#183; Businesses &#183; Work &#183; Education &#183; Projects &#183; Hobbies
					</h4>

					<Accordian id="blogsAndMore" flush={true}>

						<Accordian.Item id="Blogs">
							<Accordian.Header>
								<h6 className="fw-strong">
									Blogs
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									Blogs that I write when I have time.
								</p>
								<BlogsAccordian />
							</Accordian.Body>
						</Accordian.Item>
						

						<Accordian.Item id="Businesses">
							<Accordian.Header>
								<h6 className="fw-strong">
									Businesses
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									I want to start my own business. These are my attempts. Some of them I'm still working on, others I've admitted failure. 
								</p>
								<BusinessesAccordian />
							</Accordian.Body>
						</Accordian.Item>

						<Accordian.Item id="Work">
							<Accordian.Header>
								<h6 className="fw-strong">
									Work
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									Work I've done for clients and jobs that I've had.
								</p>
								<WorkAccordian />
							</Accordian.Body>
						</Accordian.Item>

						<Accordian.Item id="Education">
							<Accordian.Header>
								<h6 className="fw-strong">
									Education
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									My education history.
								</p>
								<EducationAccordian />
							</Accordian.Body>
						</Accordian.Item>

						<Accordian.Item id="Projects">
							<Accordian.Header>
								<h6 className="fw-strong">
									Projects
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									Little and big projects that I've done.
								</p>
								<ProjectsAccordian />
							</Accordian.Body>
						</Accordian.Item>

						<Accordian.Item id="Hobbies">
							<Accordian.Header>
								<h6 className="fw-strong">
									Hobbies
								</h6>
							</Accordian.Header>
							<Accordian.Body>
								<p className="fw-light">
									Some of my interests.
								</p>
								<HobbiesAccordian />
							</Accordian.Body>
						</Accordian.Item>


					</Accordian>

				</div>
			</div>
		</React.Fragment>
	);
}

export default HomeContent;