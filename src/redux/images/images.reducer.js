import { imagesDataActionTypes } from './images.types.js';

const initialState = {
	images: [],
};

const imagesDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case imagesDataActionTypes.IMAGES_FILL: 
			return Object.assign({}, state, {
				images: action.images
			});
		case imagesDataActionTypes.IMAGE_DELETE:
			 return {
		        images: state.images.filter(
		          image => image.id !== action.imageId
	        	)
     		 };
     	case imagesDataActionTypes.IMAGE_ADD: 
     		return {
     			images: [
     				...state.images,
     				action.image
     			]
     		}
     	case imagesDataActionTypes.IMAGE_EDIT:
     		const notEditesImages = state.images.filter(
			    image => image.id !== action.image.id
			  );
     		return {
     			images: [
     				...notEditesImages,
     				action.image
     			]
     		}
     	default:
     		return state;
	}
};

export default imagesDataReducer;