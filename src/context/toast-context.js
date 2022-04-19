import { createContext, useContext, useState } from 'react';

const initialState = { type: '', message: '' };

const ToastContext = createContext(initialState);

const useToastHandler = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
    const [toastHandler, setToastHandler] = useState(initialState);

    const setToastHandlerWithTimeout = (data) => {
        setToastHandler(data);
        setTimeout(() => setToastHandler(), 3000);
    }

    return (
        <ToastContext.Provider value={{ toastHandler, setToastHandler: setToastHandlerWithTimeout }}>
            {children}
        </ToastContext.Provider>
    );
}

export { ToastProvider, useToastHandler };