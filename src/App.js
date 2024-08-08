import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Define an array of paths where the Header and Footer should not be displayed
  const noHeaderFooterPaths = ["/login"];

  // Check if the current path is in the array
  const isNoHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  const CheckifUserisAuthenticated = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    CheckifUserisAuthenticated();
    // return () => {
    //   CheckifUserisAuthenticated;
    // };
  }, []);

  return (
    <>
      {!isNoHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
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
      {!isNoHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
