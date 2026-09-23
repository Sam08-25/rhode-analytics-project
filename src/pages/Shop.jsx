import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import products from "../data/product";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "view_item_list", {
        item_list_name: "Shop Products",
        items: products.map((product) => ({
          item_id: product.id,
          item_name: product.name,
          item_category: product.category,
          price: product.price,
        })),
      });
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">

      <h1 className="text-4xl md:text-6xl font-serif mb-10">
        Shop
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full md:w-[450px] px-5 py-3 rounded-full border border-gray-300 bg-white"
        />
      </div>

      <div className="flex flex-wrap gap-3 md:gap-4 mb-10">

        <button
          onClick={() =>
            setSelectedCategory("All")
          }
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "All"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() =>
            setSelectedCategory("Skincare")
          }
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Skincare"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Skincare
        </button>

        <button
          onClick={() =>
            setSelectedCategory("Lip Care")
          }
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Lip Care"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Lip Care
        </button>

        <button
          onClick={() =>
            setSelectedCategory("Treatment")
          }
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Treatment"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Treatment
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            <Link to={`/product/${product.id}`}>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[280px] md:h-[350px] object-cover"
              />

            </Link>

            <div className="p-5">

              <Link
                to={`/product/${product.id}`}
              >
                <h2 className="text-lg font-medium hover:underline">
                  {product.name}
                </h2>
              </Link>

              <p className="mt-2 text-gray-500">
                {product.category}
              </p>

              <p className="mt-2 text-lg font-medium">
                ₹{product.price}
              </p>

              <div className="mt-2 text-yellow-500">
                ⭐ {product.rating}
              </div>

              <Link to={`/product/${product.id}`}>
                <button className="mt-5 w-full bg-black text-white py-3 rounded-full hover:opacity-90">
                  View Product
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl">
            No products found
          </h2>
        </div>
      )}

    </div>
  );
}

export default Shop;