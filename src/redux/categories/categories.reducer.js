import { categoriesDataActionTypes } from './categories.types.js';

const initialState = {
	categories: [],
};

const categoriesDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case categoriesDataActionTypes.CATEGORIES_FILL: 
			return Object.assign({}, state, {
				categories: action.categories
			});
		case categoriesDataActionTypes.CATEGORY_DELETE:
			 return {
		        categories: state.categories.filter(
		          category => category.id !== action.categoryId
	        	)
     		 };
     	case categoriesDataActionTypes.CATEGORY_ADD: 
     		return {
     			categories: [
     				...state.categories,
     				action.category
     			]
     		}
     	case categoriesDataActionTypes.CATEGORY_EDIT:
     		const notEditedCategories = state.categories.filter(
			    category => category.id !== action.category.id
			  );
     		return {
     			categories: [
     				...notEditedCategories,
     				action.category
     			]
     		}
     	default:
     		return state;
	}
};

export default categoriesDataReducer;