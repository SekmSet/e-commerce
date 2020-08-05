import {
    EMPTY_CART,
    SUB_QUANTITY,
    ADD_QUANTITY,
    REMOVE_FROM_CART,
    ADD_TO_CART,
} from "../_actions/ACTION_TYPES";

/*const token = window.localStorage.getItem('token');*/

const initialState = {
    products: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: [...state.products, action.article],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {...product, selected: false, quantity: 1}
                        : product,
                ),
            };
        case ADD_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {...product, quantity: product.quantity + 1}
                        : product,
                ),
            };
        case SUB_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            };
        case EMPTY_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.selected
                        ? {...product, selected: false, quantity: 1}
                        : product,
                ),
            };
        default:
            return state;
    }
};
