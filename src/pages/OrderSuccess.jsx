import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId =
    "ORD-" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (
    <div className="max-w-5xl mx-auto px-8 py-24 min-h-screen">

      <div className="bg-white rounded-3xl p-12 text-center shadow-sm">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-serif mb-4">
          Thank You For Your Order
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your order has been placed successfully.
        </p>

        <div className="bg-[#F8F4EF] rounded-2xl p-6 max-w-md mx-auto mb-8">

          <div className="mb-4">
            <p className="text-gray-500 text-sm">
              Order Number
            </p>

            <p className="text-xl font-semibold">
              {orderId}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-500 text-sm">
              Status
            </p>

            <p className="font-medium">
              Confirmed
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Estimated Delivery
            </p>

            <p className="font-medium">
              3 - 5 Business Days
            </p>
          </div>

        </div>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            to="/shop"
            className="bg-black text-white px-8 py-4 rounded-full"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-black px-8 py-4 rounded-full"
          >
            Back To Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;