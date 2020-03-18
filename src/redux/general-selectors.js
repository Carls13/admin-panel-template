import { createSelector } from 'reselect';

import { selectUsers } from './users/users.selectors';

export const selectDataWithID = (type, dataID) => 
	createSelector(
		[selectUsers],
		(users) => {
			if (type === 'Usuario') {
				return users.filter((user) => user.id === dataID)[0]
			}
		}
	);