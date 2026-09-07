import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";


// صفحة كارد العناصر
const ProductCard = ({ product }) => {

 const {addToCart} = useContext(CartContext);

 const {wishlistItems , toggleWishlist}=useContext(WishlistContext);

 const isInWishlist = wishlistItems.some((item)=>item.id === product.id);



  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">


      {/* ديف شايل سبان لعرض صورة المنتج وبوتون شايل ايموجي القلب  */}
      <div className="relative mb-4 flex h-48 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-slate-400">Product Image</span>

        <button 
        
         type="button"

         aria-label={isInWishlist 
          ? "Remove from wishlist " : "Add to wishlist" }
        className={`absolute right-3
         top-3 rounded-full bg-white p-2
           shadow-sm transition
           hover:text-red-500 ${isInWishlist ? "text-red-500" : "text-gray-400"}`}
           
            onClick={() => {
             
              toggleWishlist(product);
            }}>
            
          <FaHeart />
        </button>
      </div>


        {/* براجراف شايل كاتيجورى المنتج */}
      <p className="mb-1 text-sm text-blue-600">
        {product.category}
      </p>


       {/* لينك مكتوب بداخله اسم المنتج وبيودينا علي صفحة عرض المنتج */}
      <Link
        to={`/products/${product.id}`}
        className="mb-2 block text-lg font-semibold text-slate-800 hover:text-blue-600"
      >
        {product.name}
      </Link>



        {/* ديف شايل ايموجي النجوم وسبان بيعرض التقييم */}
      <div className="mb-3 flex items-center gap-1 text-sm text-yellow-500">
        <FaStar />
        <span>{product.rating}</span>
      </div>



        {/* ديف بداخله براجراف بيعرض سعر المنتج   */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg font-bold text-slate-900">
          {product.price} EGP
        </p>
  


        {/*  سبان بيعرض كمية المخزون للمنتج */}
        <span className="text-xs text-slate-500">
          Stock: {product.stock}
        </span>
      </div>




        {/* زرار اضافه اللي السله ومعاه ايموجي سله */}
      <button
       className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-mediumtext-white transition hover:bg-blue-700"
       onClick={()=>{
       
        addToCart(product,1)}}
        >
        
       
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;