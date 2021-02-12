import ReactNotification from "react-notifications-component";
import Routes from "./app-routes/Routes";
import Layout from "./components/layout/Layout";
import ReactDOM from "react-dom";

const renderNotifications = () =>
	ReactDOM.createPortal(
		<ReactNotification />,
		document.querySelector("#custom-notification")
	);

function App() {
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
