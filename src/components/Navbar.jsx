import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F4EF] border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-4xl font-serif"
        >
          rhode
        </Link>

        <div className="flex items-center gap-8 text-sm">

          <Link to="/">
            Home
          </Link>

          <Link to="/shop">
            Shop
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link
            to="/wishlist"
            className="relative"
          >
            <FaHeart size={20} />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 rounded-full">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative"
          >
            <FaShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;