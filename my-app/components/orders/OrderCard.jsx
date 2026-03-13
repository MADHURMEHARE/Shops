"use client";

export default function OrderCard({ order }) {
return ( <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-5">

```
  {/* Order Header */}
  <div className="flex justify-between items-center mb-4">
    <div>
      <p className="font-semibold text-gray-800">
        Order #{order.id}
      </p>
      <p className="text-xs text-gray-500">
        {order.date}
      </p>
    </div>

    {/* Status Badge */}
    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
      Paid
    </span>
  </div>


  {/* Products */}
  <div className="space-y-3">

    {order.items.map((item, index) => (
      <div
        key={`${order.id}-${index}`}
        className="flex items-center justify-between border-b pb-2"
      >

        <div className="flex items-center gap-3">

          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-lg object-cover border"
          />

          <div>
            <p className="text-sm font-medium text-gray-800">
              {item.name}
            </p>

            <p className="text-xs text-gray-500">
              Qty: {item.qty}
            </p>
          </div>

        </div>

        <p className="text-sm font-semibold text-gray-800">
          ₹{item.price * item.qty}
        </p>

      </div>
    ))}

  </div>


  {/* Total */}
  <div className="flex justify-between items-center mt-4 pt-3 border-t">

    <p className="font-semibold text-gray-700">
      Total
    </p>

    <p className="text-lg font-bold text-green-600">
      ₹{order.total}
    </p>

  </div>

</div>

);
}
