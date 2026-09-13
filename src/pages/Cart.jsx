
import { useContext ,useState} from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";


{/* كومبوننت السله  */}
const Cart = () => {

{/* هاتلي الكارت ايتمس والانكريس كوانتتي بواسطه يوزكونتكست من كارت كونتكست */}
const {cartItems , increaseQuantity ,decreaseQuantity , removeFromCart, clearCart}=useContext(CartContext);

const [showClearModal, setShowClearModal] = useState(false);

const cartTotal = cartItems.reduce((total, item)=>total + item.price * item.quantity , 0);

const cartCount = cartItems.reduce((total , item)=> total + item.quantity , 0);


  return (


    
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* كارد العرض داخل السله */}
      <h1 className="text-3xl font-bold mb-8"> Shopping Cart </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg font-medium text-slate-700">
                Your cart is empty.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Add some products to your cart and they will appear here.
              </p>

              <Link
                to="/products"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Browse Products
              </Link>
            </div>

            ) : (
              cartItems.map((item) => (


              <div
                  key={item.id}
                className="border rounded-lg p-4 mb-4 flex flex-col
                  sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <span className="text-sm text-gray-500">
                    Stock: {item.stock - item.quantity}
                    </span>

                    <p className="text-sm text-gray-500">
                      Unit Price: ${item.price}
                    </p>
                  </div>

                 
                  <div className="flex items-center gap-2 border rounded-lg w-fit">
                    <button
                      type="button"
                      className="px-3 py-1 font-semibold text-slate-600 hover:text-blue-600 transition"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="min-w-8 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      className="px-3 py-1 font-semibold text-slate-600 hover:text-blue-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
                      onClick={() => increaseQuantity(item.id)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>

                    {item.quantity >= item.stock && (
                      <span className="text-xs text-red-500">
                        Maximum stock reached
                      </span>
                    )}


                  </div>

                  <div className="sm:text-right">
                    
                    <p className="text-lg font-bold">
                      ${item.price * item.quantity}
                    </p>

                    <button
                      type="button"
                      className="mt-2 text-sm font-medium text-red-500 transition hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>

              </div>
          ))
                
              
          )}
        </div>

        {cartItems.length > 0 && (

        <div className="border rounded-lg p-6 mt-6 lg:sticky lg:top-24 h-fit">

          <h2 className="text-lg font-semibold mb-3">
            Order Summary
          </h2>

          <p className="text-sm text-slate-500 mb-3">
            Items: {cartCount}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-medium">
              Total
            </span>

            <span className="text-2xl font-bold">
              {cartTotal} EGP
            </span>
          </div>

          <Link
            to="/products"
            className="block w-full rounded-lg bg-slate-100 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Continue Shopping
          </Link>

          <Link to="/checkout"
           className="block w-full mt-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition">
            Checkout
          </Link>

          <button
            type="button"
            onClick={() => setShowClearModal(true)}
            className="w-full mt-3 py-3 rounded-lg border border-red-300 text-red-600 font-semibold hover:bg-red-50 transition"
          >
            Clear Cart
          </button>


          {showClearModal && (
            <div className="fixed inset-0 z-50 flex 
            items-center justify-center bg-slate-900/40 px-4" 
            onClick={()=>{setShowClearModal(false)}}>

              <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl" onClick={(e)=>e.stopPropagation()}>
                
                <h2 className="text-xl font-bold text-slate-800">
                  Clear Cart?
                </h2>

                <p className="mt-2 text-slate-500">
                  Are you sure you want to remove all items from your cart?
                </p>

                <div className="mt-6 flex justify-end gap-3">
                  
                  <button
                    type="button"
                    onClick={() => setShowClearModal(false)}
                    className="rounded-lg bg-slate-100 px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-200 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      clearCart();
                      setShowClearModal(false);
                    }}
                    className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white hover:bg-red-600 transition"
                  >
                    Clear Cart
                  </button>

                </div>
              </div>
            </div>
          )}



        </div>
        )}


       



      </div>
    


    </div>
  );
};

export default Cart;