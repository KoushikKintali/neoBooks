import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { ToastHandler } from './components/toast-handler/ToastHandler';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';
import ProductListing from './pages/ProductListing/ProductListing';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/products' element={<ProductListing />}></Route>
                <Route path='/login' element={<Signin />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
            </Routes>
            <ToastHandler />
        </div >
    );
}

export default App;
