import React from "react";
import {Link} from "react-router-dom";
// Components
import {Accordian} from "#components";
// Other imports
import {BlogPosts} from "#constants/blogs";

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

						{
							BlogPosts.map((blog, id) => (
								<p className="fw-light" key={id}>
									<Link
										to={blog.link}
										className="text-dark"
									>
										{blog.title}
									</Link>
								</p>
							))
						}

					</Accordian.Body>
				</Accordian.Item>
			</Accordian>
		</React.Fragment>
	);
}

export default BlogsAccordian;