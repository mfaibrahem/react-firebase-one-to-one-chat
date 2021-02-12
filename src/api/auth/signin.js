import firebase from "../../firebase";

const auth = firebase.auth();

const signinWithEmail = async values => {
	const { email, password } = values;
	try {
		const res = await auth.signInWithEmailAndPassword(email, password);
		console.log("signin res", res);
		return res;
	} catch (e) {
		console.log(e);
	}
};

export default signinWithEmail;
