import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t ">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">Anandwan</h2>
          <p className="text-gray-600 mt-3 text-sm">
            Discover amazing products at the best prices.  
            Anandwan brings you electronics, fashion, groceries,
            and much more in one place.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Shop</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/category/electronics">Electronics</Link></li>
            <li><Link href="/category/home">Home</Link></li>
            <li><Link href="/category/grocery">Grocery</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/help">Help Center</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Anandwan. All rights reserved.
      </div>

    </footer>
  );
}