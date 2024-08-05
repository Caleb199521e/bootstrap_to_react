import React from "react";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Wallclocks from "./Pages/Wallclocks";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Accessories from "./Pages/Accessories";
import Flowers from "./Pages/Flowers";
import Panels from "./Pages/Panels";
import Login from "./Pages/Login";
import Sheets from "./Pages/Sheets";
import Tiles from "./Pages/Tiles";
import Services from "./Pages/Services";
import Shelves from "./Pages/Shelves";
import Wallpapers from "./Pages/Wallpapers";
import Vases from "./Pages/Vases";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wallclocks" element={<Wallclocks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/panels" element={<Panels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/tiles" element={<Tiles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/shelves" element={<Shelves />} />
        <Route path="/vases" element={<Vases />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
