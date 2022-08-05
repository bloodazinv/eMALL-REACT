import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import {UserContext} from "../../store/user/user.action";
import {CartContext} from "../../store/cart/cart.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from "./navigation.styles";
const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon/>

                    {isCartOpen && <CartDropDown/>}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;