import { useEffect, useState } from "react";
import axios from "axios";
 

import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
   
  
 
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  
  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );
     
 
 
  return (
  
  
  <div className="p-6">
 
      
   <div style={{ padding: "20px" }}>

   <input
     type="text"
     placeholder="Search products..."
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     style={{
       padding: "10px",
       width: "300px",
        marginBottom: "20px",
      }}
    />

   <div
     style={{
       display: "flex",
       gap: "20px",
       flexWrap: "wrap",
     }}
   >
     {filteredProducts.map((product) => (
       <ProductCard
         key={product.id}
         product={product}
        />
      ))}
    </div>
    
  </div>
</div>
 
  );
}

export default Home;