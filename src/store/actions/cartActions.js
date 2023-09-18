export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product) {
    return {
        type: ADD_TO_CART, //It must be name of action .
        payload: product //It must be data. It must effect to state(cart). So that is reducer.
    }
}

export function REMOVE_FROM_CARTCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}