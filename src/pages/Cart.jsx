
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";


{/* كومبوننت السله  */}
const Cart = () => {

{/* هاتلي الكارت ايتمس والانكريس كوانتتي بواسطه يوزكونتكست من كارت كونتكست */}
const {cartItems , increaseQuantity ,decreaseQuantity , removeFromCart}=useContext(CartContext);

const cartTotal = cartItems.reduce((total, item)=>total + item.price * item.quantity , 0)


  return (


    
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* كارد العرض داخل السله */}
      <h1 className="text-3xl font-bold mb-8"> Shopping Cart </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-16" >

              <p className="text-gray-500 mb-5 ">
                Your cart is empty.
              </p>

              <Link to="/products"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
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
                      className="px-3 py-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>


                    <button
                      className="px-3 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
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
                      className="text-sm text-red-500 mt-2"
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

          <div className="flex items-center justify-between">
            <span className="font-medium">
              Total
            </span>

            <span className="text-2xl font-bold">
              ${cartTotal}
            </span>
          </div>

          <Link to="/checkout"
           className="block w-full mt-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition">
            Checkout
          </Link>



        </div>
        )}

      </div>
    


    </div>
  );
};

export default Cart;