import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import {
  trackBeginCheckout,
  trackPurchase,
} from "../analytics/events";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length > 0) {
      trackBeginCheckout(totalPrice + 99);
    }
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!customer.name.trim()) {
      newErrors.name =
        "Full Name is required";
    }

    if (!customer.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        customer.email
      )
    ) {
      newErrors.email =
        "Enter a valid email";
    }

    if (!customer.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^\d{10}$/.test(customer.phone)
    ) {
      newErrors.phone =
        "Phone number must be 10 digits";
    }

    if (!customer.address.trim()) {
      newErrors.address =
        "Address is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (!validateForm()) {
      return;
    }

    trackPurchase(totalPrice + 99);

    clearCart();

    navigate("/order-success");
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 min-h-screen">

      <h1 className="text-5xl font-serif mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Customer Details */}

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl mb-6">
            Customer Details
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={customer.name}
            onChange={(e) =>
              setCustomer({
                ...customer,
                name: e.target.value,
              })
            }
            className={`w-full border p-4 rounded-xl mb-2 ${
              errors.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mb-4">
              {errors.name}
            </p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={customer.email}
            onChange={(e) =>
              setCustomer({
                ...customer,
                email: e.target.value,
              })
            }
            className={`w-full border p-4 rounded-xl mb-2 ${
              errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-4">
              {errors.email}
            </p>
          )}

          <input
            type="text"
            placeholder="Phone Number"
            value={customer.phone}
            onChange={(e) =>
              setCustomer({
                ...customer,
                phone: e.target.value,
              })
            }
            className={`w-full border p-4 rounded-xl mb-2 ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mb-4">
              {errors.phone}
            </p>
          )}

          <textarea
            rows="5"
            placeholder="Full Address"
            value={customer.address}
            onChange={(e) =>
              setCustomer({
                ...customer,
                address: e.target.value,
              })
            }
            className={`w-full border p-4 rounded-xl mb-2 ${
              errors.address
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          {errors.address && (
            <p className="text-red-500 text-sm">
              {errors.address}
            </p>
          )}

        </div>

        {/* Order Summary */}

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl mb-6">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              No products in cart
            </p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b py-4"
                >
                  <div className="flex justify-between">

                    <div>
                      <h3 className="font-medium">
                        {item.name}
                      </h3>

                      <p className="text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="font-medium">
                      ₹
                      {item.price *
                        item.quantity}
                    </div>

                  </div>
                </div>
              ))}

              <div className="mt-8">

                <div className="flex justify-between mb-3">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="flex justify-between mb-3">
                  <span>Shipping</span>
                  <span>₹99</span>
                </div>

                <div className="flex justify-between text-2xl font-semibold mt-6 border-t pt-4">
                  <span>Total</span>
                  <span>
                    ₹{totalPrice + 99}
                  </span>
                </div>

              </div>

              <button
                onClick={placeOrder}
                className="w-full mt-8 bg-black text-white py-4 rounded-full hover:opacity-90"
              >
                Place Order
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Checkout;