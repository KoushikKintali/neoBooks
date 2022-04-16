import "./App.css";
import Navbar from './components/navbar/Navbar';
import ProductListing from './pages/ProductListing/ProductListing';

function App() {

    return (
        <div className="App">
            <Navbar />
            <ProductListing />
        </div >
    );
}

export default App;
