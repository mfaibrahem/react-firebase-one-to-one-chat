import "./SigninFrom.scss";
import React, { useContext, useState } from "react";
import signinWithEmail from "../../api/auth/signin";
import { useHistory } from "react-router-dom";
import { store } from "react-notifications-component";
import routerLinks from "../../app-routes/routerLinks";
import Loading from "../common/loading/Loading";
import UesrContext from "../../contexts/user-context/UserProvider";
import firebase from "../../firebase";
import ChatContext from "../../contexts/chat-context/ChatProvider";

const SigninForm = () => {
	const history = useHistory();
	const { setCurrentUser } = useContext(UesrContext);
	const { setChatUsersUnsubscribe } = useContext(ChatContext);
	const [loading, setLoading] = useState(false);
	const [values, setValues] = useState({
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
		if (values?.email && values?.password) {
			try {
				setLoading(true);
				const signinRes = await signinWithEmail(values);
				if (signinRes) {
					const unsubscribeUsers = await firebase
						.firestore()
						.collection("chatUsers")
						.doc(signinRes.user.uid)
						.update({
							isOnline: true
						});
					setChatUsersUnsubscribe(unsubscribeUsers);
					setLoading(false);
					setValues({
						email: "",
						password: ""
					});
					setCurrentUser({
						uid: signinRes.user.uid,
						username: signinRes.user.displayName,
						photoUrl: signinRes.user.photoURL,
						email: signinRes.user.email
					});
					store.addNotification({
						title: "Wonderful!",
						message: "You are Loggedin successfully.",
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
			} catch (e) {
				setLoading(false);
				console.log("e", e);
			}
		}
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
				<button type="submit">
					{loading ? <Loading /> : "Signin"}
					👉
				</button>
			</form>
		</div>
	);
};

export default SigninForm;
