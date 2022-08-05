import {useContext} from "react";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../store/cart/cart.context";

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles";
import {useNavigate} from "react-router-dom";

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}

            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropDown;