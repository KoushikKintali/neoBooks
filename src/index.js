import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from './context/cart-context';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './context/toast-context';

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <ToastProvider>
            <BrowserRouter>
                <CartProvider>
                    <App />
                </CartProvider>
            </BrowserRouter>
        </ToastProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
