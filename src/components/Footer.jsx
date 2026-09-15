import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[#CCFBF1] bg-white px-4 py-12 text-[#183B43]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#183B43]">
            Pharma<span className="text-[#14B8A6]">Store</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#64748B]">
            A simple and modern pharmacy shopping experience for
            everyday healthcare needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-[#0F766E]">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-[#64748B]">
            <Link
              to="/"
              className="transition hover:text-[#14B8A6]"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="transition hover:text-[#14B8A6]"
            >
              Products
            </Link>

            <Link
              to="/offers"
              className="transition hover:text-[#14B8A6]"
            >
              Offers
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[#14B8A6]"
            >
              About
            </Link>
          </div>
        </div>

        {/* Customer */}
        <div>
          <h3 className="font-bold text-[#0F766E]">
            Customer
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-[#64748B]">
            <Link
              to="/orders"
              className="transition hover:text-[#14B8A6]"
            >
              My Orders
            </Link>

            <Link
              to="/wishlist"
              className="transition hover:text-[#14B8A6]"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              className="transition hover:text-[#14B8A6]"
            >
              Shopping Cart
            </Link>

            <Link
              to="/account"
              className="transition hover:text-[#14B8A6]"
            >
              My Account
            </Link>
          </div>
        </div>

        {/* About PharmaStore */}
        <div>
          <h3 className="font-bold text-[#0F766E]">
            PharmaStore
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            Designed with a clean, responsive and user-friendly
            shopping experience in mind.
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#CCFBF1] pt-6 text-center text-sm text-[#64748B]">
        © 2026 PharmaStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;