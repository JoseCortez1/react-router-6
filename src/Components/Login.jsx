import React, { useState } from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const login = (e) => {
		e.preventDefault();

		console.log(username);
	};
	return (
		<div>
			<p className="title">Login</p>
			<form action="" onSubmit={login}>
				<label htmlFor="username">Ingresa usuario</label>
				<input
					name="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
