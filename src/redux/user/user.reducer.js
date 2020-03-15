import { userActionTypes } from './user.types';

const initialState = {
  authUser: {
    username: 'Carls13'}
}

const userReducer = (state = initialState, action) => {
  const { authUser } = action;
  switch (action.type) {
    case userActionTypes.USER_LOGIN:
      return Object.assign({}, state, {
       authUser
      })
    case userActionTypes.USER_SIGN_OUT:
      return Object.assign({}, state, {
        authUser: null
      })
    default:
      return state
  }
};

export default userReducer;