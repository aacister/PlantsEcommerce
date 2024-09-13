import apiFetch from "./apiFetch";

export const addToCart = ({plantId, quantity, potColor}) => {
    return apiFetch("POST", `/cart/plants/${plantId}`, {
        quantity,
        pot_color: potColor,
    });
};

export const getCart = () => apiFetch('GET', '/cart');

export const deleteItemFromCart = ({itemId}) => apiFetch('DELETE', `/cart/${itemId}`);