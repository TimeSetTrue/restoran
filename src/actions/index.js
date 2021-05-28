const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADED',
		payload: newMenu,
	};
};

const menuRequested = () => {
	return {
		type: 'MENU_REQUESTED',
	};
};

const error = () => {
	return {
		type: 'MENU_ERROR',
	};
};

const addItemCart = (id) => {
	return {
		type: 'ADD_MENU_CART',
		payload: id,
	};
};

const removeItemCart = (id) => {
	return {
		type: 'REMOVE_MENU_CART',
		payload: id,
	};
};

const defaultItems = () => {
	return {
		type: 'ITEMS_NULL',
	};
};

export {
	menuLoaded,
	menuRequested,
	error,
	addItemCart,
	removeItemCart,
	defaultItems,
}