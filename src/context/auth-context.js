import { createContext, useContext, useEffect, useState } from 'react';

const initialState = { token: '' };

const AuthContext = createContext(initialState);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState();

    useEffect(() => setToken(localStorage.getItem('token')), []);

    const isLoggedIn = !!token;

    const setTokenInLocalStorage = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const removeTokenInLocalStorage = () => {
        localStorage.removeItem('token');
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, setToken: setTokenInLocalStorage, removeToken: removeTokenInLocalStorage }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, useAuth };