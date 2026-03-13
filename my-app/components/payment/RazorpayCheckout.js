"use client";

export default async function RazorpayCheckout(total, cart, clearCart, router) {

  const res = await fetch("/api/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: total })
  });

  const order = await res.json();

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: "INR",
    name: "Anandwan Grocery",
    description: "Milk & Grocery Order",
    order_id: order.id,

    handler: function (response) {

      console.log("Payment Success:", response);

      const newOrder = {
        id: Date.now(),
        items: cart,
        total,
        paymentId: response.razorpay_payment_id,
        date: new Date().toLocaleString()
      };

      const existingOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
      );

      clearCart();

      router.push("/order-success");
    },

    theme: {
      color: "#16a34a"
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}