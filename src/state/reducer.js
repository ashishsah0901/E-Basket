export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REEMOVE_FROM_BASKET':
            let newBasket = state.basket.filter(item => item.key !== action.id)
            return {
                ...state,
                basket: newBasket
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
};

export default reducer