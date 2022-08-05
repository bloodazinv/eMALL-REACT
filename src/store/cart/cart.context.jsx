import {createContext, useEffect, useState} from "react";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems:[],
    addItemToCart: () => {},
    cartCount: 0,
    total:0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce
        (
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0
        );
        setTotal(newTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove));
    }
    const clearCartItem = (productToClear) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== productToClear.id));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemToCart,
        clearCartItem,
        total,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}