import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "./firebase";
import ChatRoom from "./components/chat-room/ChatRoom";
import Signin from "./components/signin/Signin";
import Signout from "./components/signout/Signout";

function App() {
	const [user] = useAuthState(firebase.auth());

	return (
		<div className="App">
			<section>
				{user ? (
					<>
						<ChatRoom />
						<Signout />
					</>
				) : (
					<Signin />
				)}
			</section>
		</div>
	);
}

export default App;
