import { useContext } from "react";
import { Link } from "react-router-dom";

import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext);

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-serif mb-10">
        Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <h2 className="text-xl">
          No products in wishlist.
        </h2>
      ) : (
        <div className="grid md:grid-cols-4 gap-8">

          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden"
            >

              <Link
                to={`/product/${product.id}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
              </Link>

              <div className="p-5">

                <h2 className="text-lg">
                  {product.name}
                </h2>

                <p className="mt-2">
                  ₹{product.price}
                </p>

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  className="mt-4 w-full bg-black text-white py-3 rounded-full"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;