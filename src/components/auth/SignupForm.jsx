import "react-notifications-component/dist/theme.css";
import "./SignupForm.scss";
import React, { useContext, useState } from "react";
import signupWithEmail from "../../api/auth/signup";
import { store } from "react-notifications-component";
import { useHistory } from "react-router-dom";
import routerLinks from "../../app-routes/routerLinks";
import Loading from "../common/loading/Loading";
import firebase from "../../firebase";
import UesrContext from "../../contexts/user-context/UserProvider";
import ChatContext from "../../contexts/chat-context/ChatProvider";

const sleep = ms => new Promise(r => setTimeout(r, ms));
const SignupForm = () => {
	const history = useHistory();
	const { setCurrentUser } = useContext(UesrContext);
	const { setChatUsersUnsubscribe } = useContext(ChatContext);
	const [loading, setLoading] = useState(false);
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
		e.preventDefault();
		try {
			if (values?.name && values.email && values.password) {
				setLoading(true);
				const signupRes = await signupWithEmail(values);
				if (signupRes) {
					await firebase
						.firestore()
						.collection("chatUsers")
						.doc(signupRes.user.uid)
						.set({
							username: signupRes.user.displayName,
							uid: signupRes.user.uid,
							createdAt: firebase.firestore.FieldValue.serverTimestamp(),
							isOnline: true,
							lastMessage: {
								text: "",
								createdAt: firebase.firestore.FieldValue.serverTimestamp()
							}
						});
					await sleep(500);
					setLoading(false);
					setValues({
						name: "",
						email: "",
						password: ""
					});
					setCurrentUser({
						uid: signupRes.user.uid,
						username: signupRes.user.displayName,
						photoUrl: signupRes.user.photoURL,
						email: signupRes.user.email
					});
					store.addNotification({
						title: "Wonderful!",
						message: "You are registered successfully.",
						type: "success",
						insert: "top",
						container: "top-right",
						animationIn: ["animate__animated", "animate__zoomIn"],
						animationOut: ["animate__animated", "animate__zoomOut"],
						dismiss: {
							duration: 3000,
							onScreen: true
						}
					});
					history.push(routerLinks.homePage);
				} else {
					setLoading(false);
				}
			}
		} catch (e) {
			setLoading(false);
			console.log("e", e);
		}
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
				<button type="submit">
					{loading ? <Loading /> : "Signup"}
					👉
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
