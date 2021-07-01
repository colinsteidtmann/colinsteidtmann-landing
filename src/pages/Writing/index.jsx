import React from "react";
import {useParams, Link} from "react-router-dom";
// Other imports
import {BlogPosts} from "#constants/blogs";

const Pageination = (props) => {
	const {prevBlog, nextBlog} = props;

	return (
		<React.Fragment>
			<div className="row row-cols-1 row-cols-lg-2 my-3 gy-3">
				<div className="col text-lg-end">
					{
						prevBlog &&
						<Link to={prevBlog.link} className="text-dark mx-5 w-100" style={{"textDecoration":"none"}}>
							<strong>Previous:</strong> {prevBlog.title}
						</Link>
					}
				</div>
				<div className="col text-lg-start">
					{
						nextBlog &&
						<Link to={nextBlog.link} className="text-dark mx-5 w-100" style={{"textDecoration":"none"}}>
							<strong>Next:</strong> {nextBlog.title} 
						</Link>
					}
				</div>
			</div>
		</React.Fragment>
	);
}

export const Writing = () => {
	const {slug1, slug2} = useParams();
	const slug = slug1 + "/" + slug2;
	const blogIndx = BlogPosts.findIndex(post => post.link.includes(slug))
	const blog = BlogPosts[blogIndx].component;
	let prevBlog, nextBlog;
	if (blogIndx > 0) { prevBlog = BlogPosts[blogIndx-1] };
	if (blogIndx < (BlogPosts.length - 1)) { nextBlog = BlogPosts[blogIndx+1] };

	return (
		<React.Fragment>
			{blog}
			<Pageination prevBlog={prevBlog} nextBlog={nextBlog} />
		</React.Fragment>
	);
}

export default Writing;