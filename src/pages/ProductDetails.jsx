import { useParams } from "react-router-dom";
import products from "../data/products";
import { FaStar, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useState, useContext} from "react";
import CartContext from "../context/CartContext";

// الكومبوننت الخاصة بتفاصيل المنتج
const ProductDetails = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const { id } = useParams();

  // ستات لتخزين الكمية المطلوبة
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const cartItem = cartItems.find(
    (item) => item.id === Number(id)
  );

  const availableStock = product
    ? product.stock - (cartItem?.quantity || 0)
    : 0;



  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-[#183B43]">
            Product Not Found
          </h1>

          <p className="text-[#64748B]">
            The product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0FDFA] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Product Details Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Product Image */}
            <div className="flex min-h-[400px] items-center justify-center bg-[#CCFBF1] p-8 lg:min-h-[600px]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-white/70 bg-white/60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-6"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">

              {/* Category */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0F766E]">
                {product.category}
              </p>

              {/* Product Name */}
              <h1 className="mb-5 text-3xl font-bold leading-tight text-[#183B43] sm:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mb-5 flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#FACC15]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-sm font-medium text-[#64748B]">
                  {product.rating}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl font-bold text-[#0F766E]">
                  {product.price} EGP
                </span>

                {product.isOffer && product.oldPrice && (
                  <span className="text-lg text-[#94A3B8] line-through">
                    {product.oldPrice} EGP
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mb-7 leading-7 text-[#64748B]">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mb-6 rounded-xl bg-[#F0FDFA] px-4 py-3">
                <span className="font-medium text-[#183B43]">
                  Available Stock:
                </span>{" "}
                <span
                  className={
                    availableStock <= 0
                      ? "font-semibold text-[#EF4444]"
                      : availableStock <= 2
                      ? "font-semibold text-orange-500"
                      : "font-semibold text-[#0F766E]"
                  }
                >
                  {availableStock}
                </span>
              </div>

              {/* Maximum Stock Message */}
              {availableStock <= 0 && (
                <p className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-[#EF4444]">
                  This product is already in your cart at maximum stock.
                </p>
              )}

              {/* Quantity + Total */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#183B43]">
                    Quantity:
                  </span>

                  <div className="flex items-center overflow-hidden rounded-xl border border-[#CCFBF1] bg-white">

                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      disabled={availableStock <= 0 || quantity <= 1}
                      className="flex h-11 w-11 items-center justify-center text-[#0F766E] transition hover:bg-[#F0FDFA] disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="text-xs" />
                    </button>

                    {/* Quantity */}
                    <span className="flex h-11 min-w-12 items-center justify-center border-x border-[#CCFBF1] px-3 font-semibold text-[#183B43]">
                      {quantity}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.min(availableStock, prev + 1)
                        )
                      }
                      disabled={
                        availableStock <= 0 ||
                        quantity >= availableStock
                      }
                      className="flex h-11 w-11 items-center justify-center text-[#0F766E] transition hover:bg-[#F0FDFA] disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="flex items-center justify-between rounded-xl bg-[#F0FDFA] px-4 py-3 sm:min-w-[220px]">
                  <span className="font-medium text-[#64748B]">
                    Total
                  </span>

                  <span className="text-xl font-bold text-[#0F766E]">
                    {product.price * quantity} EGP
                  </span>
                </div>
              </div>

              {/* Add To Cart */}
              <button
                type="button"
                onClick={() => addToCart(product, quantity)}
                disabled={
                  availableStock <= 0 ||
                  quantity > availableStock
                }
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#14B8A6] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0F766E] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;