export const fillColors = (colors) => {
	return {
		type: actionTypes.COLORS_FILL,
		colors
	}
};

export const addColor = (color) => {
	return {
		type: actionTypes.COLOR_ADD,
		color
	}
};

export const editColor = (color) => {
	return {
		type: actionTypes.COLOR_EDIT,
		color
	}
};

export const deleteColor = (colorId) => {
	return {
		type: actionTypes.COLOR_DELETE,
		colorId
	}
};