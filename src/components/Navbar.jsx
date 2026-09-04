
import {
  FaPlus,
  FaChevronDown,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories";

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [search , setSearch] =useState("");

  return (
    <nav className="w-full sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* Main Navbar */}

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <FaPlus className="text-lg text-blue-600" />
            </div>

            <span className="text-xl font-bold text-slate-800">
              Pharma<span className="text-blue-600">Store</span>
            </span>

          </div>

          {/* Desktop Navigation Links */}

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/about">About</Link>
          </div>

          {/* Desktop Categories */}

          <div className="relative hidden md:flex">

            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              Categories
              <FaChevronDown className="text-xs" />
            </button>

            {isCategoriesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-52 rounded-xl bg-white p-2 shadow-lg">

                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/category/${category.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {category.name}
                  </Link>
                ))}

              </div>
            )}

          </div>

          {/* Search */}

          <div className="hidden md:flex">

            <div className="flex w-64 items-center rounded-xl bg-slate-100 px-3 py-2">

              <button
                type="button"
                onClick={() => console.log(search)}
                >
                <FaSearch className="text-sm text-slate-400" />
              </button>

              <input
                type="text"
                placeholder="Search products..."
                className="ml-2 w-full bg-transparent text-sm outline-none"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    console.log(search);
                }
                }}
              />

            </div>

          </div>

          {/* Wishlist + Cart + Account */}

          <div className="hidden items-center gap-5 md:flex">

            {/* Wishlist */}

            <Link
            to="/wishlist"
            className="relative"
            >
            <FaHeart className="text-xl" />
            </Link>

            {/* Cart */}

            <Link
                to="/cart"
                className="relative"
                >
                <FaShoppingCart className="text-xl" />

                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    0
                </span>
            </Link>

            {/* Account */}

            <Link
                to="/account"
                className="relative"
                >
                <FaUser className="text-xl" />
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl text-slate-700 md:hidden"
          >
            <FaBars />
          </button>

        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Products
              </Link>

              <Link
                to="/offers"
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Offers
              </Link>

              <Link
                to="/about"
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                About
              </Link>

              <button
                onClick={() =>
                  setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                }
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <span>Categories</span>
                <FaChevronDown className="text-xs" />
              </button>

              {isMobileCategoriesOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">

                  <Link
                    to="/category/medicine"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                    Medicine
                  </Link>

                  <Link
                    to="/category/vitamins"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                    Vitamins
                  </Link>

                  <Link
                    to="/category/skincare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                    Skincare
                  </Link>

                  <Link
                    to="/category/personal-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                    Personal Care
                  </Link>

                  <Link
                    to="/category/baby-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                    Baby Care
                  </Link>

                </div>
              )}

              {/* Mobile Actions */}

              <div className="mt-2 flex items-center justify-around border-t border-slate-200 pt-4">

                <Link
                    to="/wishlist"
                    className="text-xl text-slate-600 hover:text-blue-600"
                    >
                    <FaHeart />
                </Link>

                <Link
                    to="/cart"
                    className="relative text-xl text-slate-600 hover:text-blue-600"
                    >
                    <FaShoppingCart />

                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                        0
                    </span>
                </Link>

                <Link
                    to="/account"
                    className="text-xl text-slate-600 hover:text-blue-600"
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

