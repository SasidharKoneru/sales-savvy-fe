import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Customer_home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* fetch catalogue once */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8081/getAllProducts");
        if(!res.ok) throw new Error("Failed to fetch products");
        setProducts(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* add-to-cart hangler */
  async function handleAddToCart(product) {
    try {
      await fetch("https://localhost:8081/addToCart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId: product._id, quantity: 1 }),
        });
        alert(`Added "${product.name}" to cart`);
      } catch (err) {
        console.error(err);
        alert("Could not add to cart");
      }
  }

  /*---------------------------------------------------*/
  return(
    <div className="customer-home container mt-6">
      <h1 className="text-center mb-4">Welcome to Sales-Savvy</h1>
      <h2 className="text-center m6-6">Available Products</h2>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && (
        products.lenght ? (
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard
                key={p._id}
                product={p}
                onAddToCart={() => handleAddToCart(p)} 
              />
            ))}
            </div>
        ): (
          <p className="text-center">No products available</p>
        )
      )}
    </div>
  );
}
