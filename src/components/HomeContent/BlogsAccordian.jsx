import React from "react";
import {Link} from "react-router-dom";
// Components
import {Accordian} from "#components";
// Other imports

export const BlogsAccordian = () => {
	return (
		<React.Fragment>

			<Accordian id="bikeTripBlog" flush={true}>
				<Accordian.Item id="BikeTrip">
					<Accordian.Header>
						<p className="fw-light">
							39 Day Solo Bike Trip Across America
						</p>
					</Accordian.Header>
					<Accordian.Body>

						<p className="fw-light">
							This was a crazy trip I did when I was 17. It was the biggest mental challenge of my life so far but one that I'll remember forever.
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/inspiration"
								className="text-dark"
							>
								The Inspiration
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/preparations"
								className="text-dark"
							>
								The Preparations
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day1"
								className="text-dark"
							>
								Day 1: San Francisco → Davis CA
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day2"
								className="text-dark"
							>
								Day 2: Davis → Pioneer CA
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day3"
								className="text-dark"
							>
								Day 3: Pioneer → Carson City CA
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day4"
								className="text-dark"
							>
								Day 4: Carson City → Fallon NV
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day5"
								className="text-dark"
							>
								Day 5: Fallon → Austin NV
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day6"
								className="text-dark"
							>
								Day 6: Austin → Ely NV
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day7"
								className="text-dark"
							>
								Day 7: Ely → Baker NV
							</Link>
						</p>

						<p className="fw-light">
							<Link
								to="writing/bikeTrip/day8"
								className="text-dark"
							>
								Day 8:
							</Link>
						</p>
					</Accordian.Body>
				</Accordian.Item>
			</Accordian>
		</React.Fragment>
	);
}

export default BlogsAccordian;