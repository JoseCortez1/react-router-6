import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
	const activateStyle = {
		color: "#C66CFB",
	};
	const deactivateStyle = {
		color: "#AD8A49",
	};
	return (
		<div className="container-navbar">
			{routes.map((route, index) => (
				<NavLink
					key={index}
					style={({ isActive }) => (isActive ? activateStyle : deactivateStyle)}
					to={route.path}
					end>
					{route.name}
				</NavLink>
			))}
		</div>
	);
};
const routes = [];

routes.push({
	path: "/",
	name: "Home",
});
routes.push({
	path: "/blog",
	name: "Blog",
});
routes.push({
	path: "/profile",
	name: "Profile",
});
routes.push({
	path: "/login",
	name: "Login",
});
routes.push({
	path: "/logout",
	name: "Logout",
});

export default Menu;
