import { createSelector } from 'reselect';

export const selectUsers = state => state.users.users;

export const selectUserWithID = (userId) =>
  createSelector(
    [selectUsers],
    users => users.filter((user) => user.id === userId)[0]
);
