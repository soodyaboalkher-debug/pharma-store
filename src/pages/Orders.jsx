import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-slate-500">
          You have no orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold">
                    Order #{order.orderId}
                  </h2>

                  <p className="text-sm text-slate-500">
                    {order.date}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    {order.status}
                  </span>
                </div>

                <span className="font-bold">
                  {order.cartTotal} EGP
                </span>
              </div>

              <p className="text-sm text-slate-600">
                Payment: {order.paymentMethod}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;