
import { useLocation , Link} from "react-router-dom";

const OrderConfirmation = () => {

  const location = useLocation();

  const {
    customerInfo,
    paymentMethod,
    cartItems,
    cartTotal,
    orderId,
  } = location.state || {};

  if (!location.state) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">
        No Order Found
      </h1>

      <p className="text-slate-500">
        Please place an order first.
      </p>
    </div>
  );
}





  const paymentLabels = {
  cash: "Cash on Delivery",
  wallet: "Mobile Wallet",
  card: "Visa / Mastercard",
};

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">

      <div className="border rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-4">
          Order Confirmed 🎉
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Order ID: #{orderId}
        </p>

        <p className="text-slate-500 mb-6">
          Your order has been placed successfully.
        </p>


        <div className="text-left border-t pt-6 mt-6 space-y-2">

          <h2 className="text-xl font-semibold mb-4">
            Customer Information
          </h2>

          <p>
            <span className="font-medium">Name:</span>{" "}
            {customerInfo?.name}
          </p>

          <p>
            <span className="font-medium">Phone:</span>{" "}
            {customerInfo?.phone}
          </p>

          <p>
            <span className="font-medium">Address:</span>{" "}
            {customerInfo?.address}
          </p>

          <p>
            <span className="font-medium">Payment:</span>{" "}
            {paymentLabels[paymentMethod]}
          </p>

      </div>


      <div className="text-left border-t pt-6 mt-6">

        <h2 className="text-xl font-semibold mb-4">
          Order Items
        </h2>

        <div className="space-y-4">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
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
        </div>

      </div>


      <div className="border-t mt-6 pt-4 flex items-center justify-between text-left">

        <span className="text-lg font-semibold">
          Total
        </span>

        <span className="text-2xl font-bold">
          {cartTotal} EGP
        </span>



      </div>

        <Link
          to="/products"
          className="block mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
        <Link
          to="/"
          className="block mt-3 w-full rounded-lg border border-slate-300 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Back to Home
        </Link>

        <p className="text-sm text-slate-400">
          Thank you for shopping with Pharma Store.
        </p>

      </div>

    </div>
  );
};

export default OrderConfirmation;