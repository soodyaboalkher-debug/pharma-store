
import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
            Saved Products
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0F766E] sm:text-4xl">
            My Wishlist
          </h1>

          <p className="mt-2 text-slate-500">
            Keep your favorite products in one place.
          </p>
        </div>

        {/* Empty Wishlist */}
        {wishlistItems.length === 0 ? (
          <div className="rounded-2xl bg-white px-4 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#CCFBF1] text-2xl text-[#0F766E]">
              ♡
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#183B43]">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              You haven't added any products to your wishlist yet.
              Browse our products and save your favorites here.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-xl bg-[#14B8A6] px-6 py-3 font-bold text-white transition hover:bg-[#0F766E]"
            >
              Browse Products
            </Link>

          </div>
        ) : (

          /* Wishlist Products */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        )}

      </div>
    </div>
  );
};

export default Wishlist;

