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
            const found = state.products.find(a => a.id === action.article.id);

            if (found) {
                found.quantity += 1;
                return state;
            }
            return {
                ...state,
                products: [...state.products, {...action.article, quantity: 1}],

            };

        case SUB_QUANTITY:
            // looking for articles where id = id
            const results = state.products.find(product => {
                return product.id === action.article.id
            });

            if (results) {
                results.quantity -= 1;
                // remove product if quantity lower than 1
                if (results.quantity < 1) {
                    const rest = state.products.filter(res => res.id !== action.article.id);
                    return {
                        ...state,
                        products: [...rest],
                    };
                }
            }
            return {
                ...state
            };

        case REMOVE_FROM_CART:
          return {...initialState};
        default:
            return state;
    }
};
