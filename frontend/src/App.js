import { BrowserRouter, Routes, Route } from "react-router-dom";
 
 
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import "./App.css";
 
function App() {
  return (
  
    <BrowserRouter>
      <Navbar />

      <Routes>
      
        

      
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<CartPage />} />
        
        <Route path="/Wishlist"element={<WishlistPage />}  />
        
      
      </Routes>
    </BrowserRouter>
     
   
  );
}

export default App;
 