import firebase from "../../firebase";

const signupWithEmail = async values => {
	const { email, password } = values;
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		console.log("signup res: ", res);
		return res;
	} catch (e) {
		console.log(e);
	}
};

export default signupWithEmail;
