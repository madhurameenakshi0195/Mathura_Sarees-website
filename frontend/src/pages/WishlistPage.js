import { useContext } from "react";

import {
  WishlistContext,
} from "../context/WishlistContext";

function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wishlist ❤️</h1>

      {wishlist.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() =>
              removeFromWishlist(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default WishlistPage;