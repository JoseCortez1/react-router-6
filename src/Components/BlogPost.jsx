import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../Assets/blogdata";

const BlogPost = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const data = blogData.find((blog) => blog.slug === slug);
	const returnBlog = () => {
		navigate("/blog");
	};
	return (
		<>
			{/* <button onClick={returnBlog}>Back to blog</button> */}
			{data ? (
				<div className="container-blog" id={data.id}>
					<h1>{data.title}</h1>
					<p>{data.content}</p>
				</div>
			) : (
				<div className="container-blog">
					<h1>Lee tu primer Blog</h1>
				</div>
			)}
		</>
	);
};

export default BlogPost;
