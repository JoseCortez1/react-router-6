import React from "react";

const Logout = () => {
	const logout = (e) => {
		e.preventDefault();

		console.log("salir");
	};
	return (
		<div>
			<p className="title">Logout</p>
			<form action="" onSubmit={logout}>
				<button type="submit">Logout</button>
			</form>
		</div>
	);
};

export default Logout;
