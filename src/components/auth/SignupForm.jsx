import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import "./SignupForm.scss";
import React, { useState } from "react";
import signupWithEmail from "../../api/auth/signup";
import { store } from "react-notifications-component";

const SignupForm = () => {
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

	const handleSignupWithEmail = async e => {
		store.addNotification({
			title: "Wonderful!",
			message: "teodosii@react-notifications-component",
			type: "success",
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__zoomIn"],
			animationOut: ["animate__animated", "animate__zoomOut"],
			dismiss: {
				duration: 5000,
				onScreen: true
			}
		});
		e.preventDefault();
		await signupWithEmail(values);
	};

	return (
		<div className="signup-form-wrap">
			<form onSubmit={handleSignupWithEmail} className="signup-form">
				<input
					name="name"
					value={values.name}
					type="text"
					placeholder="Enter your name..."
					onChange={handleChange}
				/>
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
				<button type="submit">Signup 👉</button>
			</form>
		</div>
	);
};

export default SignupForm;
