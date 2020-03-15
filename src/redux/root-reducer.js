import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import usersDataReducer from './users/users.reducer';
import colorsDataReducer from './colors/colors.reducer';
import categoriesDataReducer from './categories/categories.reducer';
import imagesDataReducer from './images/images.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersDataReducer,
  colors: colorsDataReducer,
  categories: categoriesDataReducer,
  images: imagesDataReducer,
});