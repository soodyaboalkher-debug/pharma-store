import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      <div className="relative mb-4 flex h-48 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-slate-400">Product Image</span>

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-500 shadow-sm transition hover:text-red-500">
          <FaHeart />
        </button>
      </div>

      <p className="mb-1 text-sm text-blue-600">
        {product.category}
      </p>

      <h2 className="mb-2 text-lg font-semibold text-slate-800">
        {product.name}
      </h2>

      <div className="mb-3 flex items-center gap-1 text-sm text-yellow-500">
        <FaStar />
        <span>{product.rating}</span>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg font-bold text-slate-900">
          {product.price} EGP
        </p>

        <span className="text-xs text-slate-500">
          Stock: {product.stock}
        </span>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;