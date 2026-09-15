
import {  useContext, useState } from "react";
import OrderContext from "../context/OrderContext";

const Orders = () => {

  const {orders}=useContext(OrderContext);
 
  const [selectedOrder, setSelectedOrder] = useState(null);


  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
            Order History
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0F766E] sm:text-4xl">
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            View your previous orders and track their details.
          </p>
        </div>

        {/* Orders */}
        {orders.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-bold text-[#0F766E]">
              No Orders Yet
            </h2>

            <p className="mt-2 text-slate-500">
              You have no orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.orderId}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >

                {/* Order Header */}
                <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <h2 className="text-lg font-bold text-[#0F766E]">
                      Order #{order.orderId}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.date}
                    </p>

                    <span className="mt-3 inline-block rounded-full bg-[#CCFBF1] px-3 py-1 text-xs font-bold text-[#0F766E]">
                      {order.status}
                    </span>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Total
                    </p>

                    <span className="text-xl font-bold text-[#0F766E]">
                      {order.cartTotal} EGP
                    </span>
                  </div>

                </div>

                {/* Order Information */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex flex-wrap gap-x-6 gap-y-2">

                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-[#183B43]">
                        Payment:
                      </span>{" "}
                      {order.paymentMethod}
                    </p>

                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-[#183B43]">
                        Items:
                      </span>{" "}
                      {order.cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedOrder(order)}
                    className="w-full rounded-xl bg-[#14B8A6] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0F766E] sm:w-auto"
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#183B43]/40 px-4 py-6"
            onClick={() => setSelectedOrder(null)}
          >
            <div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                    Order Details
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-[#0F766E]">
                    Order #{selectedOrder.orderId}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedOrder.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedOrder(null)}
                  aria-label="Close order details"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFBF1] text-xl font-bold text-[#0F766E] transition hover:bg-[#14B8A6] hover:text-white"
                >
                  ×
                </button>

              </div>

              {/* Order Items */}
              <div className="mt-6">

                <h3 className="mb-4 text-lg font-bold text-[#183B43]">
                  Order Items
                </h3>

                <div className="space-y-3">

                  {selectedOrder.cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-xl bg-[#F8FAFC] p-4"
                    >

                      <div>
                        <p className="font-semibold text-[#183B43]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold text-[#0F766E]">
                        {item.price * item.quantity} EGP
                      </p>

                    </div>
                  ))}

                </div>
              </div>

              {/* Customer Information */}
              <div className="mt-6 rounded-2xl bg-[#F0FDFA] p-5">

                <h3 className="mb-4 text-lg font-bold text-[#0F766E]">
                  Customer Information
                </h3>

                <div className="space-y-3 text-sm text-slate-600">

                  <p>
                    <span className="font-bold text-[#183B43]">
                      Customer:
                    </span>{" "}
                    {selectedOrder.customerInfo?.name}
                  </p>

                  <p>
                    <span className="font-bold text-[#183B43]">
                      Phone:
                    </span>{" "}
                    {selectedOrder.customerInfo?.phone}
                  </p>

                  <p>
                    <span className="font-bold text-[#183B43]">
                      Address:
                    </span>{" "}
                    {selectedOrder.customerInfo?.address}
                  </p>

                  <p>
                    <span className="font-bold text-[#183B43]">
                      Payment:
                    </span>{" "}
                    {selectedOrder.paymentMethod}
                  </p>

                  <p>
                    <span className="font-bold text-[#183B43]">
                      Status:
                    </span>{" "}
                    {selectedOrder.status}
                  </p>

                </div>
              </div>

              {/* Total */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <span className="text-lg font-bold text-[#183B43]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#0F766E]">
                  {selectedOrder.cartTotal} EGP
                </span>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;

