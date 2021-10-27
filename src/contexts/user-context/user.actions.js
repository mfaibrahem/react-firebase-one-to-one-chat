import UserActionTypes from "./user.types";
import Cookies from "js-cookie";

export const setUser = user => {
	// localStorage.setItem('current_user', JSON.stringify(user));
	Cookies.set("current_user", JSON.stringify(user), {
		sameSite: "strict",
		expires: 90
		// expires: 5 / (24 * 60 * 60) // 5 secondas
	});

	return {
		type: UserActionTypes.SET_USER,
		payload: user
	};
};

export const removeUser = () => {
	// localStorage.removeItem('current_user');
	Cookies.remove("current_user");
	return {
		type: UserActionTypes.REMOVE_USER
	};
};
