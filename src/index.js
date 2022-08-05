import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Elements} from "@stripe/react-stripe-js";

import App from './App';

import {UserProvider} from "./store/user/user.action";
import {CategoriesProvider} from "./store/categories.context";
import {CartProvider} from "./store/cart/cart.context";

import './index.scss';

const rootElement = document.getElementById("root");
render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

