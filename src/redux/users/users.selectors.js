import { createSelector } from 'reselect';

export const selectUsers = state => state.users.users;

export const selectUserWithID = (userId) =>
  createSelector(
    [selectUsers],
    users => users.filter((user) => user.id === userId)[0]
);

const chunkArray = (list, howMany) => {
  var idx = 0
  var result = []

  while (idx < list.length) {
    if (idx % howMany === 0) result.push([])
    result[result.length - 1].push(list[idx++])
  }

  return result
};

export const selectPaginatedUsers = (amount) => 
	createSelector(
		[selectUsers],
		users => chunkArray(users, amount)
);