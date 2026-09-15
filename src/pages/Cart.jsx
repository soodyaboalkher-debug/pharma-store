
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

/* كومبوننت السلة */
const Cart = () => {
  /* هات بيانات السلة والدوال من CartContext */
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const [showClearModal, setShowClearModal] = useState(false);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Your Selection
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0F766E] sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            Review your selected products before checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="lg:col-span-2">

            {cartItems.length === 0 ? (
              <div className="rounded-2xl bg-white px-4 py-16 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#CCFBF1] text-2xl text-[#0F766E]">
                  🛒
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#183B43]">
                  Your Cart is Empty
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Add some products to your cart and they will appear here.
                </p>

                <Link
                  to="/products"
                  className="mt-6 inline-block rounded-xl bg-[#14B8A6] px-6 py-3 font-bold text-white transition hover:bg-[#0F766E]"
                >
                  Browse Products
                </Link>

              </div>
            ) : (

              cartItems.map((item) => (

                <div
                  key={item.id}
                  className="mb-4 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >

                  {/* Product Information */}
                  <div className="min-w-0">

                    <h2 className="text-lg font-bold text-[#183B43]">
                      {item.name}
                    </h2>

                    <span className="mt-1 block text-sm font-medium text-[#0F766E]">
                      Stock Available: {item.stock - item.quantity}
                    </span>

                    <p className="mt-1 text-sm text-slate-500">
                      Unit Price: {item.price} EGP
                    </p>

                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col gap-2">

                    <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC]">

                      <button
                        type="button"
                        className="px-4 py-2 font-bold text-[#0F766E] transition hover:bg-[#CCFBF1]"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span className="min-w-10 border-x border-slate-200 px-3 py-2 text-center font-bold text-[#183B43]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        className="px-4 py-2 font-bold text-[#0F766E] transition hover:bg-[#CCFBF1] disabled:cursor-not-allowed disabled:opacity-40"
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>

                    </div>

                    {item.quantity >= item.stock && (
                      <span className="text-xs font-medium text-red-500">
                        Maximum stock reached
                      </span>
                    )}

                  </div>

                  {/* Total + Remove */}
                  <div className="sm:text-right">

                    <p className="text-lg font-bold text-[#0F766E]">
                      Total: {item.price * item.quantity} EGP
                    </p>

                    <button
                      type="button"
                      className="mt-2 text-sm font-semibold text-red-500 transition hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">

              <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
                Summary
              </p>

              <h2 className="mt-1 text-xl font-bold text-[#183B43]">
                Order Summary
              </h2>

              <p className="mt-4 text-sm text-slate-500">
                Items: {cartCount}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="font-bold text-[#183B43]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#0F766E]">
                  {cartTotal} EGP
                </span>

              </div>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="mt-6 block w-full rounded-xl bg-[#F0FDFA] py-3 text-center font-bold text-[#0F766E] transition hover:bg-[#CCFBF1]"
              >
                Continue Shopping
              </Link>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="mt-3 block w-full rounded-xl bg-[#14B8A6] py-3 text-center font-bold text-white transition hover:bg-[#0F766E]"
              >
                Checkout
              </Link>

              {/* Clear Cart */}
              <button
                type="button"
                onClick={() => setShowClearModal(true)}
                className="mt-3 w-full rounded-xl border border-red-200 py-3 font-bold text-red-500 transition hover:bg-red-50"
              >
                Clear Cart
              </button>

              {/* Clear Cart Modal */}
              {showClearModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-[#183B43]/40 px-4"
                  onClick={() => setShowClearModal(false)}
                >

                  <div
                    className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl text-red-500">
                      !
                    </div>

                    <h2 className="mt-4 text-xl font-bold text-[#183B43]">
                      Clear Cart?
                    </h2>

                    <p className="mt-2 leading-6 text-slate-500">
                      Are you sure you want to remove all items from your cart?
                    </p>

                    <div className="mt-6 flex justify-end gap-3">

                      <button
                        type="button"
                        onClick={() => setShowClearModal(false)}
                        className="rounded-xl bg-slate-100 px-5 py-2.5 font-bold text-slate-600 transition hover:bg-slate-200"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          clearCart();
                          setShowClearModal(false);
                        }}
                        className="rounded-xl bg-red-500 px-5 py-2.5 font-bold text-white transition hover:bg-red-600"
                      >
                        Clear Cart
                      </button>

                    </div>

                  </div>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Cart;

