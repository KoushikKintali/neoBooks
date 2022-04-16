import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login/Login';
import ProductListing from './pages/ProductListing/ProductListing';

function App() {

    return (
        <div className="App">
            <ProductListing />
            <Routes>
                <Route path='/products' element={<ProductListing />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div >
    );
}

export default App;
