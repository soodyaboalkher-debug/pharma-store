import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import OrderContext from "../context/OrderContext";



const Checkout = () => {



const navigate = useNavigate();


const {cartItems ,clearCart} = useContext(CartContext);

const { addOrder } = useContext(OrderContext);

const [paymentMethod, setPaymentMethod] = useState("");

const [customerInfo, setCustomerInfo] = useState({
  name: "",
  phone: "",
  address: "",
});


const cartTotal = cartItems.reduce((total,item)=> total+item.price * item.quantity ,0);

const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const orderId = Date.now();

  const newOrder = {
    orderId,
    customerInfo,
    paymentMethod,
    cartItems,
    cartTotal,
    date: new Date().toLocaleString(),
    status: "Pending",
  };

 addOrder(newOrder);

  clearCart();

  navigate("/orderconfirmation", {
    state: newOrder,
  });
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>


       
        {/* ديف معلومات المستخدم */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        <div className="lg:col-span-2 border rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-6">
            Customer Information
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={customerInfo.name}
                onChange={(e)=>setCustomerInfo({...customerInfo, name:e.target.value,})}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Phone Number
              </label>

              <input
              value={customerInfo.phone}
              onChange={(e)=>setCustomerInfo({...customerInfo,phone:e.target.value,})}
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
             <label className="block mb-1 font-medium">
                Address
             </label>

             <input
              value={customerInfo.address}
              onChange={(e)=>setCustomerInfo({...customerInfo,address:e.target.value,})}
                type="text"
                placeholder="Enter your address"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
             />
            </div>

            <div>
                <label className="block mb-1 font-medium">
                    Payment Method
                </label>

                <select
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    value={paymentMethod}
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                >
                    <option value="">Select payment method</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="wallet">Mobile Wallet</option>
                    <option value="card">Visa / Mastercard</option>
                </select>
            </div>

            <button
             className="mt-6 w-full rounded-lg bg-blue-600
              py-3 font-semibold text-white hover:bg-blue-700 transition
              disabled:bg-gray-400
              disabled:cursor-not-allowed"
             type="button"
             disabled={paymentMethod === "" || customerInfo.name === "" || customerInfo.phone ==="" || customerInfo.address === ""}
             onClick={handlePlaceOrder}
             
            
            >
            Place Order
            </button>

          </div>

        </div>

         {/* ديف مختصر الطلب */}
        <div className="border rounded-xl p-6 h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>
          <div className="space-y-4">

            {cartItems.map((item) => (
                <div
                key={item.id}
                className="flex items-center justify-between"
                >

                <div>
                    <p className="font-medium">
                    {item.name}
                    </p>

                    <p className="text-sm text-slate-500">
                    Quantity: {item.quantity}
                    </p>
                </div>

                <p className="font-semibold">
                    {item.price * item.quantity} EGP
                </p>

                </div>
            ))}

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
                <span className="font-semibold">
                    Total
                </span>

                <span className="text-xl font-bold">
                    {cartTotal} EGP
                </span>
            </div>

            </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;