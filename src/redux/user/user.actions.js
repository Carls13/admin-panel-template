export const userLogin = (authUser) => {
  return { type: actionTypes.USER_LOGIN, authUser }
}

export const userSignOut = () => {
  return { type: actionTypes.USER_SIGN_OUT }
}