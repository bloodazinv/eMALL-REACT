
import {CartContext} from "../../store/cart/cart.context";

import{
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from "./checkout-item.styles";
import {useContext} from "react";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {cartItems,addItemToCart,removeItemToCart,clearCartItem} = useContext(CartContext);
    const removeItemHandler = () => {
        removeItemToCart(cartItem);
    }
    const addItemHandler = () => {
        addItemToCart(cartItem);
    }
    const clearItemHandler = () => {
        clearCartItem(cartItem);
    }

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
