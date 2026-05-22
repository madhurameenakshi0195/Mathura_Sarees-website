import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "40px",
      }}
    >
      <img
         src={product.image}
         alt={product.name}
         className="w-full h-64 object-cover rounded-lg"
      />

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>
        
        

        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;