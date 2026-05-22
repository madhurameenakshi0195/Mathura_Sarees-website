import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
   

  return (
    <nav
      style={{
        padding: "15px",
        background: "#4A0000",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      {/* LEFT SIDE - LOGO + TITLE */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="logo" style={{ height: "40px" }} />

        <h1 style={{ fontFamily: "WindSong, cursive" }}>
          Madhura Sarees
        </h1>
      </div>

      {/* CENTER MENU */}
      <div style={{ display: "flex", gap: "15px" }}>
        <button>Jewellery</button>
        <button>Sarees</button>
        <button>Kurtis</button>
        <button>Hair Accessories</button>
      </div>

      {/* RIGHT SIDE LINKS */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart
        </Link>

        <Link to="/Wishlist" style={{ color: "white" }}>
          Wishlist
        </Link>

      </div>
 
    </nav>
  );
}

export default Navbar;