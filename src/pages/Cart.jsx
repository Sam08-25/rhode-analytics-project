import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import {
  trackViewCart,
  trackRemoveFromCart,
} from "../analytics/events";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length > 0) {
      trackViewCart(totalPrice);
    }
  }, [cartItems, totalPrice]);

  const handleRemove = (item) => {
    trackRemoveFromCart(item);
    removeFromCart(item.id);
  };

  const shipping = cartItems.length > 0 ? 99 : 0;

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 min-h-screen">

      <h1 className="text-5xl font-serif mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl">

          <h2 className="text-2xl mb-5">
            Your cart is empty
          </h2>

          <Link to="/shop">
            <button className="bg-black text-white px-8 py-3 rounded-full">
              Continue Shopping
            </button>
          </Link>

        </div>
      ) : (
        <>
          <div className="space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-3xl flex gap-6 items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <h2 className="text-2xl">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    ₹{item.price}
                  </p>

                  <p className="font-medium mt-2">
                    Item Total: ₹
                    {item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-4 mt-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="bg-black text-white px-3 py-1 rounded-full"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="bg-black text-white px-3 py-1 rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="bg-white mt-10 p-8 rounded-3xl">

            <h2 className="text-3xl mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <div className="flex justify-between text-2xl font-semibold border-t pt-4 mt-4">
              <span>Total</span>
              <span>
                ₹{totalPrice + shipping}
              </span>
            </div>

            <Link to="/checkout">
              <button className="w-full mt-8 bg-black text-white py-4 rounded-full">
                Proceed To Checkout
              </button>
            </Link>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;