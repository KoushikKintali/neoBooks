import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from './context/cart-context';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './context/toast-context';
import { AuthProvider } from './context/auth-context';

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ToastProvider>
                <BrowserRouter>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </BrowserRouter>
            </ToastProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
