import React from "react";
import {useParams} from "react-router-dom";
// Other imports
import {BlogPosts} from "#constants/blogs";

export const Writing = () => {
	const {slug1, slug2} = useParams();
	const slug = slug1 + "/" + slug2;
	const blog = BlogPosts[slug];

	return (
		<React.Fragment>
			{blog}
		</React.Fragment>
	);
}

export default Writing;