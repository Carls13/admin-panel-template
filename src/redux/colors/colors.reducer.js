import { colorsDataActionTypes } from './colors.types.js';

const initialState = {
	colors: [],
};

const colorsDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case colorsDataActionTypes.COLORS_FILL: 
			return Object.assign({}, state, {
				colors: action.colors
			});
		case colorsDataActionTypes.COLOR_DELETE:
			 return {
		        colors: state.colors.filter(
		          color => color.id !== action.colorId
	        	)};
     	case colorsDataActionTypes.COLOR_ADD: 
     		return {
     			colors: [
     				...state.colors,
     				action.color
     			]
     		}
     	case colorsDataActionTypes.COLOR_EDIT:
     		const notEditedColors = state.colors.filter(
			    color => color.id !== action.color.id
			  );
     		return {
     			colors: [
     				...notEditedColors,
     				action.color
     			]
     		}
     	default:
     		return state;
	}
};

export default colorsDataReducer;