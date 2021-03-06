import { usersDataActionTypes } from './users.types.js';

import { USERS_DATA as users } from './users.data.js';

const initialState = {
	users,
};

const usersDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case usersDataActionTypes.USERS_FILL: 
			return Object.assign({}, state, {
				users: action.users
			});
		case usersDataActionTypes.USER_DELETE:
			 return {
		        users: state.users.filter(
		          user => user.id !== action.userId
	        	)
     		 };
     	case usersDataActionTypes.USER_ADD: 
     		return {
     			users: [
     				...state.users,
                         {
                              ...action.user,
                              id: state.users.length + 1
                         }
     			]
     		}
     	case usersDataActionTypes.USER_EDIT:
     		const notEditedUsers = state.users.filter(
			    user => user.id !== action.user.id
			  );
     		return {
     			users: [
     				action.user,
     				...notEditedUsers
     			]
     		}
     	default:
     		return state;
	}
};

export default usersDataReducer;