import { useParams } from "react-router-dom";
import products from "../data/products";
import { FaStar } from "react-icons/fa";
import { useState , useContext } from "react";
import CartContext from "../context/CartContext";
// الكومبوننت الخاصه بتفاصيل المنتجات
const ProductDetails = () => {

 const { addToCart, cartItems } = useContext(CartContext);

 const { id } = useParams();

// يوز ستات خاصه بحفظ الكوانتيتي
 const [quantity, setQuantity] = useState(1);


const product = products.find(
  (item) => item.id === Number(id)
);

if (!product) {
  return (
    <div>
      <h1>Product Not Found</h1>
    </div>
  );
}

const cartItem = cartItems.find(
  (item) => item.id === Number(id)
);

const availableStock = product.stock - (cartItem?.quantity || 0);

 return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/*  صفحة تفاصيل المنتجات صورة المنتج*/}
      <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
        <span className="text-gray-400">
          Product Image
        </span>
      </div>

      {/* كاتيجورى المنتج*/}
      <div>
        <p className="text-gray-500 mb-2">
          {product.category}
        </p>
 
         {/* عرض اسم المنتج*/}
        <h1 className="text-3xl font-bold mb-4">
          {product.name}
        </h1>

         {/* عرض سعر المنتج*/}
        <p className="text-2xl font-semibold text-blue-600 mb-4">
          {product.price} EGP
        </p>

        {/* عرض تقييم المنتج*/}
        <div className="mb-4 flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="text-slate-700">{product.rating}</span>
        </div>

        {/* عرض كمية مخزون المنتج*/}
        <p className="mb-6">
          Available Stock: {availableStock}
        </p>

        {availableStock <= 0 && (
            <p className="mb-6 text-red-500 font-medium">
              This product is already in your cart at maximum stock.
            </p>
        )}

        {/* عرض ديسكربشن المنتج*/}
        <p className="mb-6 text-slate-600 leading-relaxed">
         {product.description}
        </p>




        <div className="mb-6 flex items-center gap-4">
         <span className="font-medium">Quantity:</span>

         
         {/*ازرار تحديد كمية المنتج في صفحة تفاصيل المنتجات */}

            <div className="flex items-center rounded-lg border border-slate-300">

                
                {/*زرار - الماينص  */}
                <button
                onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="px-4 py-2 text-lg hover:bg-slate-100"
                >
                -
                </button>

                  {/*سبان لعرض الكميه   */}

                <span className="px-4 py-2 font-medium">
                {quantity}
                </span>


                   {/*زرار  + البلس */}
                <button
                onClick={() =>
                    setQuantity((prev) => Math.min(availableStock, prev + 1))
                }
                className="px-4 py-2 text-lg hover:bg-slate-100"
                >
                +
                </button>
            </div>

            {/* عرض اجمالى الكميه في السعر = توتال السعر  المنتج*/}
            <div className="mb-6 flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3">
                <span className="font-medium text-slate-700">
                    Total Price
                </span>

                <span className="text-xl font-bold text-blue-600">
                    {product.price * quantity} EGP
                </span>
            </div>
        </div>

        {/*  زرار اضافة  المنتج الى السله*/}
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            
          onClick={() => addToCart(product, quantity)}
           disabled={availableStock <= 0 || quantity > availableStock}
        >
            Add to Cart
        </button>
      </div>

    </div>
  </div>
);
      
    
  
};

export default ProductDetails;