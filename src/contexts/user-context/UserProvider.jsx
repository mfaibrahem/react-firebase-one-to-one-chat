import React, { createContext, useReducer } from "react";
import { setUser, removeUser } from "./user.actions";
import userReducer from "./user.reducer";
import Cookies from "js-cookie";

const INITIAL_STATE = {
	loggedIn: Cookies.get("current_user") ? true : false,
	user: Cookies.get("current_user")
		? JSON.parse(Cookies.get("current_user"))
		: null
};

const contextInitialState = {
	...INITIAL_STATE,
	setCurrentUser: user => {},
	removeCurrentUser: () => {}
};

const UesrContext = createContext(contextInitialState);

export const UserProvider = ({ children }) => {
	const [reducerState, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { user, loggedIn } = reducerState;
	const setCurrentUser = cUser => dispatch(setUser(cUser));
	const removeCurrentUser = () => dispatch(removeUser());

	return (
		<UesrContext.Provider
			value={{
				loggedIn,
				user,
				setCurrentUser,
				removeCurrentUser
			}}
		>
			{children}
		</UesrContext.Provider>
	);
};

export default UesrContext;
