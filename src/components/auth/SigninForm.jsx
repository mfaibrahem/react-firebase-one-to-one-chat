import "./SigninFrom.scss";
import React, { useState } from "react";
import signinWithEmail from "../../api/auth/signin";

const SigninForm = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: ""
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setValues(currState => {
			return {
				...currState,
				[name]: value
			};
		});
	};

	const handleSigninWithEmail = async e => {
		e.preventDefault();
		await signinWithEmail(values);
	};

	return (
		<div className="signin-form-wrap">
			<form onSubmit={handleSigninWithEmail} className="signin-form">
				<input
					name="email"
					value={values.email}
					type="email"
					placeholder="Enter your email..."
					onChange={handleChange}
				/>
				<input
					name="password"
					value={values.password}
					type="text"
					placeholder="Enter your password..."
					onChange={handleChange}
				/>
				<button type="submit">Signin 👉</button>
			</form>
		</div>
	);
};

export default SigninForm;
