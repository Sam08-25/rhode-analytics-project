import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F4EF] border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl md:text-4xl font-serif"
        >
          rhode
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8 text-sm">

          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

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

        {/* Mobile Menu Button */}

        <button
          className="md:hidden"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes size={22} />
          ) : (
            <FaBars size={22} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 bg-[#F8F4EF]">

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Shop
          </Link>

          <Link
            to="/about"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact
          </Link>

          <Link
            to="/wishlist"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Wishlist ({wishlistItems.length})
          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cart ({totalItems})
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;