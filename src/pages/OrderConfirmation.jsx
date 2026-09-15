
import { useLocation, Link } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();

  const {
    customerInfo,
    paymentMethod,
    cartItems,
    cartTotal,
    orderId,
  } = location.state || {};

  if (!location.state) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-500">
            !
          </div>

          <h1 className="mt-5 text-2xl font-bold text-[#183B43]">
            No Order Found
          </h1>

          <p className="mt-2 text-slate-500">
            Please place an order first.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-[#14B8A6] px-6 py-3 font-bold text-white transition hover:bg-[#0F766E]"
          >
            Browse Products
          </Link>

        </div>
      </div>
    );
  }

  const paymentLabels = {
    cash: "Cash on Delivery",
    wallet: "Mobile Wallet",
    card: "Visa / Mastercard",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12">

      <div className="mx-auto max-w-2xl">

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Success Header */}
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#CCFBF1] text-2xl text-[#0F766E]">
              ✓
            </div>

            <h1 className="mt-5 text-3xl font-bold text-[#0F766E] sm:text-4xl">
              Order Confirmed 🎉
            </h1>

            <p className="mt-2 text-sm font-semibold text-[#14B8A6]">
              Order ID: #{orderId}
            </p>

            <p className="mt-3 text-slate-500">
              Your order has been placed successfully.
            </p>

          </div>

          {/* Customer Information */}
          <div className="mt-8 border-t border-slate-100 pt-6">

            <h2 className="mb-5 text-xl font-bold text-[#183B43]">
              Customer Information
            </h2>

            <div className="space-y-3 text-sm text-slate-600">

              <p>
                <span className="font-bold text-[#183B43]">
                  Name:
                </span>{" "}
                {customerInfo?.name}
              </p>

              <p>
                <span className="font-bold text-[#183B43]">
                  Phone:
                </span>{" "}
                {customerInfo?.phone}
              </p>

              <p>
                <span className="font-bold text-[#183B43]">
                  Address:
                </span>{" "}
                {customerInfo?.address}
              </p>

              <p>
                <span className="font-bold text-[#183B43]">
                  Payment:
                </span>{" "}
                {paymentLabels[paymentMethod]}
              </p>

            </div>

          </div>

          {/* Order Items */}
          <div className="mt-8 border-t border-slate-100 pt-6">

            <h2 className="mb-5 text-xl font-bold text-[#183B43]">
              Order Items
            </h2>

            <div className="space-y-3">

              {cartItems?.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl bg-[#F8FAFC] p-4"
                >

                  <div className="min-w-0">

                    <p className="font-bold text-[#183B43]">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Quantity: {item.quantity}
                    </p>

                  </div>

                  <p className="shrink-0 font-bold text-[#0F766E]">
                    {item.price * item.quantity} EGP
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Total */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

            <span className="text-lg font-bold text-[#183B43]">
              Total
            </span>

            <span className="text-2xl font-bold text-[#0F766E]">
              {cartTotal} EGP
            </span>

          </div>

          {/* Actions */}
          <div className="mt-7">

            <Link
              to="/products"
              className="block w-full rounded-xl bg-[#14B8A6] py-3.5 text-center font-bold text-white transition hover:bg-[#0F766E]"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="mt-3 block w-full rounded-xl border border-[#14B8A6] py-3.5 text-center font-bold text-[#0F766E] transition hover:bg-[#F0FDFA]"
            >
              Back to Home
            </Link>

          </div>

          <p className="mt-6 text-center text-sm text-slate-400">
            Thank you for shopping with PharmaStore.
          </p>

        </div>

      </div>

    </div>
  );
};

export default OrderConfirmation;

