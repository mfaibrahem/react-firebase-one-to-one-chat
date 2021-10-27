import firebase from "../../firebase";
import { store } from "react-notifications-component";

const auth = firebase.auth();

const signinWithEmail = async values => {
	const { email, password } = values;
	try {
		const res = await auth.signInWithEmailAndPassword(email, password);
		console.log("signin res", res);
		return res;
	} catch (e) {
		console.log(e);
		store.addNotification({
			title: "Sorry!",
			message: e.message,
			type: "danger",
			insert: "top",
			container: "top-left",
			animationIn: ["animate__animated", "animate__zoomIn"],
			animationOut: ["animate__animated", "animate__zoomOut"],
			dismiss: {
				duration: 3000,
				onScreen: true
			}
		});
	}
};

export default signinWithEmail;
