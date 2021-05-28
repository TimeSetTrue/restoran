const initialState = {
	menu: [],
	loaded: true,
	error: false,
	items: [],
	totalPrice: 0,
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'MENU_LOADED': 
			return {
				...state,
				menu: action.payload,
				loaded: false,
			};
		case 'MENU_REQUESTED': 
			return {
				...state,
				loaded: true,
			};
		case 'MENU_ERROR': 
			return {
				...state,
				error: true,
			};
		case 'ADD_MENU_CART':
			const id = action.payload;

			const itemInd = state.items.findIndex(item => item.id === id);
			
			if(itemInd >= 0) {
				const itemInState = state.items.find(item => item.id === id);
				const newItem = {
                    ...itemInState,
                    itemCart: ++itemInState.itemCart,
					priceFull: itemInState.price * itemInState.itemCart,
                }
				return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
					totalPrice: state.totalPrice + newItem.price,
                }
			}
		
			const item = state.menu.find(item => item.id === id);
			const newItem = {
				title: item.title,
				url: item.url,
				price: item.price,
				id: item.id,
				itemCart: 1,
				priceFull: item.price,
			};
			return {
				...state,
				items: [
					...state.items,
					newItem,
				],
				totalPrice: state.totalPrice + newItem.price
			};
		case 'REMOVE_MENU_CART': 
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx);
			return {
				...state,
				items: [
					...state.items.slice(0, itemIndex),
					...state.items.slice(itemIndex + 1),
				]
			};
		case 'ITEMS_NULL': 
			return {
				...state,
				items: [],
			}
		default: 
			return state;
	}
}

export default reducer;