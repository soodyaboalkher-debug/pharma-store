
import {
  FaPlus,
  FaChevronDown,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";
import OrderContext from "../context/OrderContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const { orders } = useContext(OrderContext);

  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;
  const ordersCount = orders.length;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#CCFBF1] bg-[#DFF7F3] py-2 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">

        {/* Main Navbar */}
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
              <FaPlus className="text-lg text-[#14B8A6]" />
            </div>

            <span className="text-xl font-bold text-[#183B43]">
              Pharma<span className="text-[#14B8A6]">Store</span>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">

            <Link
              to="/"
              className="rounded-xl px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="rounded-xl px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
            >
              Products
            </Link>

            <Link
              to="/offers"
              className="rounded-xl px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
            >
              Offers
            </Link>

            <Link
              to="/about"
              className="rounded-xl px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
            >
              About
            </Link>

          </div>

          {/* Search */}
          <div className="hidden md:flex">

            <div className="flex w-64 items-center rounded-xl border border-white bg-white px-3 py-2 shadow-sm transition focus-within:border-[#14B8A6] focus-within:ring-2 focus-within:ring-[#CCFBF1]">

              <button
                type="button"
                onClick={() => {
                  if (search.trim() !== "") {
                    window.location.href = `/products?search=${encodeURIComponent(search)}`;
                  }
                }}
                className="text-[#0F766E] transition hover:text-[#14B8A6]"
              >
                <FaSearch className="text-sm" />
              </button>

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full bg-transparent text-sm text-[#183B43] outline-none placeholder:text-slate-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && search.trim() !== "") {
                    window.location.href = `/products?search=${encodeURIComponent(search)}`;
                  }
                }}
              />

            </div>

          </div>

          {/* Orders + Wishlist + Cart + Account */}
          <div className="hidden items-center gap-5 md:flex">

            {/* Orders */}
            <Link
              to="/orders"
              className="relative font-bold text-[#183B43] transition hover:text-[#0F766E]"
            >
              Orders

              {ordersCount > 0 && (
                <span className="absolute -right-5 -top-2 flex h-5 w-4 items-center justify-center rounded-full bg-[#14B8A6] text-xs font-bold text-white">
                  {ordersCount}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-[#0F766E] transition hover:text-[#14B8A6]"
            >
              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-4 items-center justify-center rounded-full bg-[#0F766E] text-xs font-bold text-white">
                  {wishlistCount}
                </span>
              )}

              <FaHeart className="mx-2 text-xl" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-[#0F766E] transition hover:text-[#14B8A6]"
            >
              <FaShoppingCart className="text-xl" />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-4 items-center justify-center rounded-full bg-[#0F766E] text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="text-[#0F766E] transition hover:text-[#14B8A6]"
            >
              <FaUser className="text-xl" />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl text-[#0F766E] transition hover:text-[#14B8A6] md:hidden"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-[#CCFBF1] py-4 md:hidden">

            <div className="flex flex-col gap-3">

              {/* Mobile Navigation Links */}
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">

                <Link
                  to="/"
                  className="rounded-lg px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/products"
                  className="rounded-lg px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>

                <Link
                  to="/offers"
                  className="rounded-lg px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offers
                </Link>

                <Link
                  to="/about"
                  className="rounded-lg px-3 py-2 font-bold text-[#183B43] transition hover:bg-white hover:text-[#0F766E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

              </div>

              {/* Mobile Categories */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                }
                className="flex items-center justify-between rounded-xl bg-white px-3 py-3 text-sm font-bold text-[#0F766E] shadow-sm transition hover:bg-[#F0FDFA]"
              >
                <span>Categories</span>

                <FaChevronDown
                  className={`text-xs transition ${
                    isMobileCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileCategoriesOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l-2 border-[#14B8A6] pl-3">

                  <Link
                    to="/category/medicine"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0F766E]"
                  >
                    Medicine
                  </Link>

                  <Link
                    to="/category/vitamins"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0F766E]"
                  >
                    Vitamins
                  </Link>

                  <Link
                    to="/category/skincare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0F766E]"
                  >
                    Skincare
                  </Link>

                  <Link
                    to="/category/personal-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0F766E]"
                  >
                    Personal Care
                  </Link>

                  <Link
                    to="/category/baby-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-[#0F766E]"
                  >
                    Baby Care
                  </Link>

                </div>
              )}

              {/* Mobile Actions */}
              <div className="mt-2 flex items-center justify-around border-t border-[#CCFBF1] pt-4">

                <Link
                  to="/orders"
                  className="text-sm font-bold text-[#183B43] transition hover:text-[#0F766E]"
                >
                  Orders
                </Link>

                <Link
                  to="/wishlist"
                  className="text-xl text-[#0F766E] transition hover:text-[#14B8A6]"
                >
                  <FaHeart />
                </Link>

                <Link
                  to="/cart"
                  className="relative text-xl text-[#0F766E] transition hover:text-[#14B8A6]"
                >
                  <FaShoppingCart />

                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F766E] text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <Link
                  to="/account"
                  className="text-xl text-[#0F766E] transition hover:text-[#14B8A6]"
                >
                  <FaUser />
                </Link>

              </div>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;

