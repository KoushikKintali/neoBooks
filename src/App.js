import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { ToastHandler } from './components/index';
import { ProductListing, Signin, Signup } from './pages/index';

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
