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

const errorBoun = () => {
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

const minesItem = (id) => {
	return {
		type: 'MINES_ITEM',
		payload: id,
	};
};

const pricePlus = () => {
	return {
		type: 'TOTAL_PRICE',
	};
};

export {
	menuLoaded,
	menuRequested,
	errorBoun,
	addItemCart,
	removeItemCart,
	defaultItems,
	minesItem,
	pricePlus,
}