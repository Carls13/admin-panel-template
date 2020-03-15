export const fillImages = (images) => {
	return {
		type: actionTypes.IMAGES_FILL,
		images
	}
};

export const addImage = (image) => {
	return {
		type: actionTypes.IMAGE_ADD,
		image
	}
};

export const editImage = (image) => {
	return {
		type: actionTypes.IMAGE_EDIT,
		image
	}
};

export const deleteImage = (imageId) => {
	return {
		type: actionTypes.IMAGE_DELETE,
		imageId
	}
};