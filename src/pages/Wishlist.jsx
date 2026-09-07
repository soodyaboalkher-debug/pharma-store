import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {

  const { wishlistItems } = useContext(WishlistContext);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-8">
        My Wishlist
      </h1>
        {wishlistItems.length === 0 ? (
        <div className="text-center py-16">

            <p className="text-gray-500 mb-5">
                Your wishlist is empty.
            </p>

            <Link
                to="/products"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
                Browse Products
            </Link>

        </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((product) => (

                <ProductCard
                key={product.id}
                product={product}/>
        
            ))}
        </div>
        )}

    </div>
  );
};

export default Wishlist;