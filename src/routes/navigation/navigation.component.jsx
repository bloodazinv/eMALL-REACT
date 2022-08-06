import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from "./navigation.styles";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

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