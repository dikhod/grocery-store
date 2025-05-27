import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useAppContext } from "./context/AppContext";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {

  const isSeller = useLocation().pathname.includes("seller"); //url path contains seller
  const {showUserLogin} = useAppContext();

  return (
    <>
      {!isSeller&&<Navbar />}
      {showUserLogin &&<Login/>}
      <div className={`${isSeller?"":"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/products/:category" element={<ProductCategory/>}/>
        <Route path="/products/:category/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
      </div>
     {!isSeller && <Footer/>}
    </>
  );
};

export default App;
