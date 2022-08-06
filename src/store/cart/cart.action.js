import {CART_ACTION_TYPES} from "./cart.types";
import {createAction} from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        newCartItems
    );
}
export const removeItemToCart = (cartItems,productToRemove) => {
    const newCartItems = removeCartItem(cartItems,productToRemove);
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        newCartItems
    );
}
export const clearCartItem = (cartItems,productToClear) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        newCartItems
    );
}


const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity : cartItem.quantity + 1}
            :
            cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    //check if the quantity is equal to 1, if it is remove the item from the cart
    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    //return back cart items with macthing cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id ?
            {...cartItem, quantity: cartItem.quantity-1}
            :
            cartItem
    );
};
