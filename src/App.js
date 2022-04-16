import "./App.css";
import Navbar from './components/navbar/Navbar';
import ProductListing from './pages/ProductListing/ProductListing';

function App() {

    return (
        <div className="App">
            <Navbar></Navbar>
            <ProductListing></ProductListing>
        </div>
    );
}

export default App;
