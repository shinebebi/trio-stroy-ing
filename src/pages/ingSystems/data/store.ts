import { createStore } from 'redux';
import { products } from "./data";

const initialState = {
    products: products, // initial products array
    filteredProducts: products, // filtered products array
    activeFilter: null, // active filter ID
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.products, filteredProducts: products };
        case 'FILTER_PRODUCTS':
            return {...state, filteredProducts: action.filteredProducts, activeFilter: action.filterId };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;