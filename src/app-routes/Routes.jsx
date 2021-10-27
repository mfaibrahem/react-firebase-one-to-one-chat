import React, { useContext } from "react";
import {
	Redirect,
	Route,
	Switch
} from "react-router-dom/cjs/react-router-dom.min";
import UesrContext from "../contexts/user-context/UserProvider";
import HomePage from "../pages/home-page/HomePage";
import SigninPage from "../pages/signin-page/SigninPage";
import SignupPage from "../pages/signup-page/SignupPage";
import routerLinks from "./routerLinks";

const Routes = () => {
	const { user } = useContext(UesrContext);

	return (
		<Switch>
			<Route exact path={routerLinks.homePage}>
				{user ? <HomePage /> : <Redirect to={routerLinks.signinPage} />}
			</Route>
			<Route exact path={routerLinks.signinPage}>
				{!user ? <SigninPage /> : <Redirect to={routerLinks.homePage} />}
			</Route>
			<Route exact path={routerLinks.signupPage}>
				{!user ? <SignupPage /> : <Redirect to={routerLinks.homePage} />}
			</Route>
			<Route path="*">
				<h1>Not found page</h1>
			</Route>
		</Switch>
	);
};

export default Routes;
