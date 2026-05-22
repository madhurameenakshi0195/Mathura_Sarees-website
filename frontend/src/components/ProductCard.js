import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import {WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
    console.log(product);
    
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const handlePayment = async () => {
   const { data } =  await axios.post(
      "http://localhost:5000/api/payment/orders",
      {
        amount: 500,
      }
    );

    const options = {

      key:"rzp_test_SpBQNcr1SLG4CV",

      amount: data.amount,

      currency: data.currency,

      name: "My Store",

      description: "Test Payment",

      order_id: data.id,

      handler: function (response) {

        alert("Payment Successful");

        console.log(response);
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  } 

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "250px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="200"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to={`/product/${product.id}`}>
          <button>Details</button>
        </Link>

        <button
          onClick={() => addToCart(product)}
        >
          Cart
        </button>
        
         <button onClick = {() => addToWishlist
            (product)}>
            wishlist
         </button>
         
         <button onClick={handlePayment}>
          Pay Now
         </button>
         
        
      </div>
    </div>
  );
} 

 
     
  

export default ProductCard;