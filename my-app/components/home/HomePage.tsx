
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800')",
      }}
    >
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-white text-center">

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Anandvan Dairy & Grocery
          </h1>

          

          <Link href="/product">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 px-8 py-3 rounded-lg font-semibold"
            >
              Order fresh groceries
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* SECTION 1 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white/70 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Healthy Dairy Farms
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our cows are raised in clean and natural green farms.
              They receive proper nutrition and care every day to
              ensure the milk they produce is pure and healthy.
            </p>

            <p className="text-gray-600 mt-4">
              Healthy cows produce the highest quality milk,
              which is the foundation of all our dairy products.
            </p>
          </div>

        </div>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white/60 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Fresh Milk Collection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Every morning milk is collected directly from the farm
              using hygienic and modern equipment to maintain
              freshness and purity.
            </p>

            <p className="text-gray-600 mt-4">
              Our process ensures the milk remains natural,
              nutritious, and safe for families.
            </p>
          </div>

          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />

        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white/70 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Delivered to Your Home
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Once processed, the milk and dairy products are packed
              and delivered quickly to customers.
            </p>

            <p className="text-gray-600 mt-4">
              This ensures that you receive farm-fresh dairy
              products every day without compromising quality.
            </p>

            <Link href="/product">
              <motion.button
                whileHover={{ scale: 1.08 }}
                className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                View Our Products
              </motion.button>
            </Link>
          </div>

        </div>
      </motion.section>

    </div>
  );
};