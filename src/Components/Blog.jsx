import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../Assets/blogdata";

const Blog = () => {
	return (
		<div className="container-body container-blog">
			<p className="title">Blogs</p>
			<div className="inner-navbar">
				{blogData.map((blog) => (
					<BlogPreview title={blog.title} slug={blog.slug} key={blog.id} />
				))}
			</div>
			<Outlet />
		</div>
	);
};
const BlogPreview = ({ title, slug }) => {
	return <Link to={`/blog/${slug}`}>{title}</Link>;
};

export default Blog;
