
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Anandvan Dairy
          </h1>

          <p className="max-w-xl mx-auto text-lg">
            Delivering fresh milk and natural dairy products directly
            from our farm to your home.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Anandvan Dairy started with a simple mission: to deliver
            pure and natural milk to families. Our cows are raised
            in healthy farms where they are fed natural food and
            cared for daily.
          </p>

          <p className="text-gray-600 mt-4">
            We believe fresh dairy products should reach customers
            quickly and safely. That’s why we collect milk daily
            and deliver it directly to homes.
          </p>
        </div>

      </motion.section>

      {/* HOW WE PRODUCE MILK */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            How Our Milk Reaches You
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* FARM */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd?w=800"
                className="h-40 w-full object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg mb-2">
                Healthy Farms
              </h3>

              <p className="text-gray-600 text-sm">
                Our cows live in clean green farms where they are
                well cared for and fed natural food.
              </p>
            </motion.div>

            {/* MILKING */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800"
                className="h-40 w-full object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg mb-2">
                Fresh Collection
              </h3>

              <p className="text-gray-600 text-sm">
                Milk is collected daily using hygienic processes
                to maintain freshness and quality.
              </p>
            </motion.div>

            {/* DELIVERY */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1589985270958-86b5f4cdd7b6?w=800"
                className="h-40 w-full object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg mb-2">
                Fast Delivery
              </h3>

              <p className="text-gray-600 text-sm">
                Fresh milk and dairy products are delivered
                directly to your doorstep every morning.
              </p>
            </motion.div>

          </div>
        </div>

      </section>

      {/* OUR PRODUCTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >

        <h2 className="text-3xl font-bold mb-8">
          Our Dairy Products
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We produce fresh dairy products including milk, paneer,
          butter, and other natural dairy items that bring the
          taste of the farm to your home.
        </p>

        <Link href="/product">
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            Explore Products
          </motion.button>
        </Link>

      </motion.section>

    </div>
  );
}

