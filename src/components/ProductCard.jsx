
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaTag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";

// صفحة كارد العناصر
const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const { wishlistItems, toggleWishlist } =
    useContext(WishlistContext);

  const [added, setAdded] = useState(false);

  const isInWishlist = wishlistItems.some(
    (item) => item.id === product.id
  );

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  const availableStock =
    product.stock - (cartItem?.quantity || 0);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* صورة المنتج + Wishlist + Offer */}
      <div className="relative mb-4 flex h-48 items-center justify-center rounded-xl bg-[#F0FDFA]">

        <span className="text-sm font-medium text-slate-400">
       <img
          src={product.image}
          alt={product.name}
        />
        </span>

        {/* Offer Badge */}
        {product.isOffer && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
            <FaTag className="text-[11px]" />
            <span>Save {product.discount}%</span>
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label={
            isInWishlist
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition ${
            isInWishlist
              ? "text-red-500"
              : "text-slate-400 hover:text-red-500"
          }`}
          onClick={() => {
            toggleWishlist(product);
          }}
        >
          <FaHeart />
        </button>

      </div>

      {/* Category */}
      <p className="mb-1 text-sm font-medium capitalize text-[#0F766E]">
        {product.category}
      </p>

      {/* Product Name */}
      <Link
        to={`/products/${product.id}`}
        className="mb-2 block text-lg font-bold text-[#183B43] transition hover:text-[#0F766E]"
      >
        {product.name}
      </Link>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-1 text-sm">

        <FaStar className="text-yellow-400" />

        <span className="font-medium text-slate-600">
          {product.rating}
        </span>

      </div>

      {/* Price + Stock */}
      <div className="mb-4 flex items-center justify-between gap-3">

        <div>

          <div className="flex items-center gap-2">

            {/* Current Price */}
            <p className="text-lg font-bold text-[#0F766E]">
              {product.price} EGP
            </p>

            {/* Old Price */}
            {product.isOffer && (
              <span className="text-sm text-slate-400 line-through">
                {product.oldPrice} EGP
              </span>
            )}

          </div>

        </div>

        {/* Available Stock */}
        <span
          className={`text-sm font-bold ${
            availableStock === 0
              ? "text-red-500"
              : availableStock <= 2
              ? "text-orange-500"
              : "text-[#0F766E]"
          }`}
        >
          Stock: {availableStock}
        </span>

      </div>

      {/* Add To Cart Button */}
      <button
        type="button"
        disabled={availableStock === 0}
        className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl border py-3 font-bold transition duration-300 ${
          availableStock === 0
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
            : added
            ? "border-[#14B8A6] bg-[#CCFBF1] text-[#0F766E]"
            : "border-[#14B8A6] bg-[#14B8A6] text-white hover:bg-[#0F766E]"
        }`}
        onClick={() => {
          addToCart(product, 1);
          setAdded(true);

          setTimeout(() => {
            setAdded(false);
          }, 1000);
        }}
      >
        <FaShoppingCart />

        {availableStock === 0
          ? "Out of Stock"
          : added
          ? "Added to Cart ✓"
          : "Add to Cart"}
      </button>

    </div>
  );
};

export default ProductCard;

