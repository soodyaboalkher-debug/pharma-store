
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import OrderContext from "../context/OrderContext";

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, clearCart } = useContext(CartContext);

  const { addOrder } = useContext(OrderContext);

  const [paymentMethod, setPaymentMethod] = useState("");

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderId = Date.now();

    const newOrder = {
      orderId,
      customerInfo,
      paymentMethod,
      cartItems,
      cartTotal,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    addOrder(newOrder);

    clearCart();

    navigate("/orderconfirmation", {
      state: newOrder,
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Complete Your Order
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0F766E] sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your information and choose your preferred payment method.
          </p>
        </div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* Customer Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">

            <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
              Customer Details
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#183B43]">
              Customer Information
            </h2>

            <div className="mt-6 space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#183B43]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[#183B43] outline-none transition placeholder:text-slate-400 focus:border-[#14B8A6] focus:bg-white focus:ring-2 focus:ring-[#CCFBF1]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#183B43]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[#183B43] outline-none transition placeholder:text-slate-400 focus:border-[#14B8A6] focus:bg-white focus:ring-2 focus:ring-[#CCFBF1]"
                />
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#183B43]">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Enter your address"
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      address: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[#183B43] outline-none transition placeholder:text-slate-400 focus:border-[#14B8A6] focus:bg-white focus:ring-2 focus:ring-[#CCFBF1]"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#183B43]">
                  Payment Method
                </label>

                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-[#183B43] outline-none transition focus:border-[#14B8A6] focus:bg-white focus:ring-2 focus:ring-[#CCFBF1]"
                >
                  <option value="">
                    Select payment method
                  </option>

                  <option value="cash">
                    Cash on Delivery
                  </option>

                  <option value="wallet">
                    Mobile Wallet
                  </option>

                  <option value="card">
                    Visa / Mastercard
                  </option>
                </select>
              </div>

              {/* Place Order */}
              <button
                type="button"
                disabled={
                  paymentMethod === "" ||
                  customerInfo.name === "" ||
                  customerInfo.phone === "" ||
                  customerInfo.address === ""
                }
                onClick={handlePlaceOrder}
                className="mt-6 w-full rounded-xl bg-[#14B8A6] py-3.5 font-bold text-white transition hover:bg-[#0F766E] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Place Order
              </button>

            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">

            <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
              Summary
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#183B43]">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl bg-[#F8FAFC] p-3"
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

              {/* Total */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <span className="font-bold text-[#183B43]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#0F766E]">
                  {cartTotal} EGP
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;

