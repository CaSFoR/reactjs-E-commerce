import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import List from "./Components/List";
import Details from "./Components/Details";
import { Provider } from "react-redux";
import store from "./store";
import Checkout from "./Components/Checkout";
import Invoice from "./Components/Invoice";
import Cart from "./Components/Cart";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/HomePage";
import CurrencyConverter from "./Components/CurrencyConverter";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<List />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
