
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

import { useContext } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";
import OrderContext from "../context/OrderContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const { orders } = useContext(OrderContext);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [search , setSearch] =useState("");

  const cartCount = cartItems.reduce((total,item)=> total + item.quantity , 0);

  const wishlistCount = wishlistItems.length;



 const ordersCount = orders.length;

 

  return (
    <nav className="w-full py-2  sticky top-0 z-50 bg-[#192A45]">
      <div className="mx-auto max-w-7xl px-4">

        {/* Main Navbar */}

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
              <FaPlus className="text-lg text-blue-600" />
            </div>

            <span className="text-xl font-bold text-white">
              Pharma<span className="text-blue-600">Store</span>
            </span>

          </div>

          {/* Desktop Navigation Links */}

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-white p-1 font-bold rounded-2xl transition duration-300 hover:bg-white hover:text-[#064E3B] ">Home</Link>
            <Link to="/products" className="text-white p-1 font-bold rounded-2xl transition duration-300 hover:bg-white hover:text-[#064E3B]">Products</Link>
            <Link to="/offers" className="text-white p-1 font-bold rounded-2xl transition duration-300 hover:bg-white hover:text-[#064E3B]">Offers</Link>
            <Link to="/about" className="text-white p-1 font-bold rounded-2xl transition duration-300 hover:bg-white hover:text-[#064E3B]">About</Link>
          </div>

          {/* Desktop Categories */}



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


            {/* Orders */}

            <Link
              to="/orders"
              className="relative  font-bold text-white mr-1"
            >
              Orders

              {ordersCount > 0 && (
                <span className="absolute -top-2 -right-5 flex
                 h-5 w-4 items-center justify-center rounded-full bg-white text-sm text-[#064E3B]">
                  {ordersCount}
                </span>
              )}
            </Link>

            {/* Wishlist */}

            <Link
            to="/wishlist"
            className="relative"
            >
            <span className="absolute -top-2 -right-2 flex h-5 w-4
             items-center justify-center rounded-full bg-white text-xs text-[#064E3B]">
              {wishlistCount}
            </span>


            <FaHeart className="text-xl ml-2 mr-2 text-red-600" />
            </Link>

            {/* Cart */}

            <Link
                to="/cart"
                className="relative"
                >
                <FaShoppingCart className="text-xl text-[#D4AF37]" />

                <span className="absolute -top-2 -right-2 flex h-5 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {cartCount}
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
            className="text-xl text-white md:hidden"
          >
            <FaBars />
          </button>

        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
        <div className="border-t border-slate-200 py-4 md:hidden">

          <div className="flex flex-col gap-3">


              <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap">
            

               <Link
                 to="/"
                 className="rounded-lg px-3 py-2 font-bold text-white hover:bg-slate-50 hover:text-[#064E3B]"
                onClick={()=>setIsMobileMenuOpen(false)}
               >
                 Home
               </Link>

               <Link
                 to="/products"
                 className="rounded-lg px-3 py-2 font-bold text-white hover:bg-slate-50 hover:text-[#064E3B]"
                 onClick={()=>setIsMobileMenuOpen(false)}
               >
                 Products
               </Link>

               <Link
                 to="/offers"
                 className="rounded-lg px-3 py-2 font-bold text-white hover:bg-slate-50 hover:text-[#064E3B]"
                  onClick={()=>setIsMobileMenuOpen(false)}
               >
                 Offers
               </Link>

               <Link
                 to="/about"
                 className="rounded-lg px-3 py-2 font-bold text-white hover:bg-slate-50 hover:text-[#064E3B]"
                 onClick={()=>setIsMobileMenuOpen(false)}
               >
                 About
               </Link>
              </div>

              <button
                onClick={() =>
                  setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                }
                className="flex items-center 
                justify-between rounded-lg px-3
                 py-2 text-sm text-[#064E3B] bg-white"
              >
                <span>Categories</span>
                <FaChevronDown className="text-xs" />
              </button>

              {isMobileCategoriesOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3">

                  <Link
                    to="/category/medicine"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm bg-slate-500 text-white hover:bg-slate-600"
                    >
                    Medicine
                  </Link>

                  <Link
                    to="/category/vitamins"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm bg-slate-500 text-white hover:bg-slate-600"
                    >
                    Vitamins
                  </Link>

                  <Link
                    to="/category/skincare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm bg-slate-500 text-white hover:bg-slate-600"
                    >
                    Skincare
                  </Link>

                  <Link
                    to="/category/personal-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm bg-slate-500 text-white hover:bg-slate-600"
                    >
                    Personal Care
                  </Link>

                  <Link
                    to="/category/baby-care"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm bg-slate-500 text-white hover:bg-slate-600"
                    >
                    Baby Care
                  </Link>

                </div>
              )}

              {/* Mobile Actions */}

              <div className="mt-2 flex items-center justify-around border-t border-slate-200 pt-4">

                <Link
                  to="/orders"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600"
                >
                  Orders
                </Link>

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

