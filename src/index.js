import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, CartProvider, ToastProvider, WishlistProvider } from './context';

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ToastProvider>
                <BrowserRouter>
                    <WishlistProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </WishlistProvider>
                </BrowserRouter>
            </ToastProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
