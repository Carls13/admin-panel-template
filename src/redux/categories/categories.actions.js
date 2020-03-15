export const fillCategories = (categories) => {
	return {
		type: actionTypes.CATEGORIES_FILL,
		categories
	}
};

export const addCategory = (category) => {
	return {
		type: actionTypes.CATEGORY_ADD,
		category
	}
};

export const editCategory = (category) => {
	return {
		type: actionTypes.CATEGORY_EDIT,
		category
	}
};

export const deleteCategory = (categoryId) => {
	return {
		type: actionTypes.CATEGORY_DELETE,
		categoryId
	}
};