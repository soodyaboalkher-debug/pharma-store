import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext , useState } from "react";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";


// صفحة كارد العناصر
const ProductCard = ({ product }) => {

 const {addToCart ,cartItems} = useContext(CartContext);

 const {wishlistItems , toggleWishlist}=useContext(WishlistContext);

 const [added, setAdded] = useState(false);

 const isInWishlist = wishlistItems.some((item)=>item.id === product.id);


 const cartItem = cartItems.find(
  (item) => item.id === product.id
 );


 const availableStock = product.stock - (cartItem?.quantity || 0);



  return (
    <div className="rounded-tr-xl rounded-bl-xl border border-[#D2C4AE] bg-[#F0FDF4] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">


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
           hover:text-[#D4AF37] ${isInWishlist ? "text-[#D4AF37]" : "text-gray-400"}`}
           
            onClick={() => {
             
              toggleWishlist(product);
            }}>
            
          <FaHeart />
        </button>
      </div>


        {/* براجراف شايل كاتيجورى المنتج */}
      <p className="mb-1 text-sm text-[#064E3B]">
        {product.category}
      </p>


       {/* لينك مكتوب بداخله اسم المنتج وبيودينا علي صفحة عرض المنتج */}
      <Link
        to={`/products/${product.id}`}
        className="mb-2 block text-lg font-bold text-[#064E3B] hover:text-orange-600"
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
        <p className="text-lg font-bold  text-[#064E3B]">
          {product.price} EGP
        </p>
  


        {/*  سبان بيعرض كمية المخزون للمنتج */}
        <span className="font-bold text-[#064E3B]">
          Stock: {availableStock}
        </span>
      </div>




        {/* زرار اضافه اللي السله ومعاه ايموجي سله */}
        <button
          disabled={availableStock === 0}
          
          className={`flex w-full  items-center border border-[#064E3B] bg-[#132238] text-[#D4AF37] 
            justify-center gap-2 rounded-tr-xl rounded-bl-xl py-3 font-bold hover:bg-[#D4AF37] hover:text-[#132238]  transition
            ${
              availableStock === 0
                && "cursor-not-allowed bg-gray-400 hover:cursor-not-allowed hover:bg-gray-400"
              
            }
          `}
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