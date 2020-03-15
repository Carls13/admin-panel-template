export const fillUsers = (users) => {
	return {
		type: actionTypes.USERS_FILL,
		users
	}
};

export const addUser = (user) => {
	return {
		type: actionTypes.USER_ADD,
		user
	}
};

export const editUser = (user) => {
	return {
		type: actionTypes.USER_EDIT,
		user
	}
};

export const deleteUser = (userId) => {
	return {
		type: actionTypes.USER_DELETE,
		userId
	}
};