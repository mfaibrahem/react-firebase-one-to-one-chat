import firebase from "../../firebase";
import { store } from "react-notifications-component";

const signupWithEmail = async values => {
	const { name, email, password } = values;
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		await firebase.auth().currentUser.updateProfile({
			displayName: name,
			photoURL: "https://picsum.photos/200"
		});
		console.log("signup res: ", res);
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

export default signupWithEmail;
