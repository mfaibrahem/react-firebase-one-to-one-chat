import firebase from "../../firebase";
import { store } from "react-notifications-component";

const signout = (currentUser, removeCurrentUser, chatUsersUnsubscribe) => {
	console.log(currentUser.uid);
	firebase
		.auth()
		.signOut()
		.then(() => {
			// Sign-out successful.
			// try to update isOnline to false
			firebase
				.firestore()
				.collection("chatUsers")
				.doc(currentUser.uid)
				.update({
					isOnline: false
				})
				.then(() => {
					removeCurrentUser();
					store.addNotification({
						title: "Loggedout!",
						message: "You have loggedout successfully.",
						type: "success",
						insert: "top",
						container: "bottom-right",
						animationIn: ["animate__animated", "animate__zoomIn"],
						animationOut: ["animate__animated", "animate__zoomOut"],
						dismiss: {
							duration: 3000,
							onScreen: true
						}
					});
				})
				.then(() => {
					// unsubscribe from chatUsers listener
					chatUsersUnsubscribe();
				})
				.catch(e => {
					console.log(e);
				});
		})
		.catch(error => {
			console.log(error);
			// An error happened.
		});
};

export default signout;
