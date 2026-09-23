import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import products from "../data/product";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import {
  trackAddToCart,
  trackWishlist,
  trackViewItem,
} from "../analytics/events";

function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    if (product) {
      trackViewItem(product);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl">
          Product Not Found
        </h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);

    trackAddToCart({
      ...product,
      quantity,
      price: product.price * quantity,
    });

    alert(
      `${quantity} ${product.name} added to cart`
    );
  };

  const handleWishlist = () => {
    addToWishlist(product);

    trackWishlist(product);

    alert(
      `${product.name} added to wishlist`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-md"
          />
        </div>

        <div>

          <p className="text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            {product.name}
          </h1>

          <p className="text-2xl md:text-3xl mb-4">
            ₹{product.price}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">

            <span className="text-yellow-500">
              ⭐
            </span>

            <span>
              {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.stock} in stock)
            </span>

          </div>

          <p className="text-gray-600 leading-7 md:leading-8 mb-8">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-8">

            <button
              onClick={() =>
                setQuantity(
                  quantity > 1
                    ? quantity - 1
                    : 1
                )
              }
              className="bg-black text-white px-4 py-2 rounded-full"
            >
              -
            </button>

            <span className="text-xl font-medium">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="bg-black text-white px-4 py-2 rounded-full"
            >
              +
            </button>

          </div>

          <div className="mb-8">
            <p className="text-xl font-medium">
              Total: ₹{product.price * quantity}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full hover:opacity-90"
            >
              Add To Cart
            </button>

            <button
              onClick={handleWishlist}
              className="w-full sm:w-auto border border-black px-10 py-4 rounded-full hover:bg-black hover:text-white"
            >
              Wishlist
            </button>

          </div>

          <div className="mt-12 border-t pt-8">

            <h3 className="font-semibold text-xl mb-4">
              Product Information
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>
                Stock Available: {product.stock}
              </li>

              <li>
                Dermatologist Tested
              </li>

              <li>
                Suitable For Daily Use
              </li>

              <li>
                Cruelty Free
              </li>

              <li>
                Fragrance Balanced Formula
              </li>

              <li>
                Premium Rhode Collection
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;