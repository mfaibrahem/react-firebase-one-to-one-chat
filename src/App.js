/* eslint-disable react-hooks/exhaustive-deps */
import ReactNotification from "react-notifications-component";
import Routes from "./app-routes/Routes";
import Layout from "./components/layout/Layout";
import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import ChatContext from "./contexts/chat-context/ChatProvider";

const renderNotifications = () =>
	ReactDOM.createPortal(
		<ReactNotification />,
		document.querySelector("#custom-notification")
	);

function App() {
	const { chatUsersUnsubscribe } = useContext(ChatContext);

	useEffect(() => {
		return () => {
			chatUsersUnsubscribe();
		};
	}, []);
	return (
		<div className="App">
			<Layout>
				<Routes />
			</Layout>
			{renderNotifications()}
		</div>
	);
}

export default App;
