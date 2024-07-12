import { products } from "./data";

export const setProducts = () => {
    return { type: 'SET_PRODUCTS', products };
};

export const filterProducts = (filterId: any) => {
    const filteredProducts = products.filter((product: any) => product.category === filterId);
    return { type: 'FILTER_PRODUCTS', filteredProducts, filterId };
};