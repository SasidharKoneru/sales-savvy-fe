import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Customer_home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /* (optional) simple text search */
  const [search, setSearch] = useState("");

  /* ------------------------------------------------------------------ */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8081/getAllProducts");
        if (!res.ok) throw new Error("Failed to fetch products");
        setProducts(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* add-to-cart handler ------------- */
  async function handleAddToCart(product, qty = 1) {
    const username = localStorage.getItem("username");
    if (!username) return alert("Please sign in first");

    try {
      const resp = await fetch("http://localhost:8081/addToCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, username, quantity: qty})
      });

      resp.ok
        ? alert(`Added "${product.name}" (x${qty}) to cart1`)
        : alert("Failed to add product to cart");
    } catch (err) {
      console.error(err);
      alert("Could not add to cart");
    }
  }

  /* live search filter (optional) */
  const filtered = products.filter((p) =>
    (p.name + p.description)
    .toLowerCase()
    .includes(search.toLowerCase())
  );

  /* ------------------------------------------------------------------ */
  return (
    <section className="customer-home">

      {/* hero / headline */}
      <header className="shop-header">
        <h1 className="shop-title">Welcome to Sales&nbsp;Savvy</h1>
        <p className="shop-tagline">
          Discover curated deals, fresh arrivals and lightning-fast delivery.
          Scroll down to start shopping!
        </p>

        <button 
          className="btn btn-primary go-to-cart"
          onClick={() => navigate("/cart")}
        >
          Go to Cart 🛒
        </button>

       {/* Uncomment to enable search */}
        <input
          className="shop-search"
          type="text"
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 
      </header>

      {/* catalogue */}
      <div className="container">
        {loading && <p className="text-center">Loading…</p>}
        { error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && (
          filtered.length ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <p className="text-center">No products found matching "{search}"</p>
          )
        )}
      </div>
    </section>
  );
}