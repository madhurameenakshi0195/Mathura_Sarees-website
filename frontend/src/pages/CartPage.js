import { useContext } from "react";
import { CartContext } from "../context/CartContext";
 
function CartPage() {
  const { cart, removeFromCart, totalPrice } =
    useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default CartPage;