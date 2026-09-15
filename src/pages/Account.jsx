import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-[#ECFDF5] p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
            My Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#132238] sm:text-4xl">
            Welcome to PharmaStore
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Manage your orders, wishlist and shopping cart from one place.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            to="/orders"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-[#132238]">
              My Orders
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View your previous orders and order details.
            </p>
          </Link>

          <Link
            to="/wishlist"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-[#132238]">
              My Wishlist
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View and manage your favorite products.
            </p>
          </Link>

          <Link
            to="/cart"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-[#132238]">
              My Cart
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Review your selected products and checkout.
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Account;