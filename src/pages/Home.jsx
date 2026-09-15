
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";


const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="bg-[#ECFDF5] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              Your Health, Our Priority
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#132238] sm:text-5xl">
              Your Trusted
              <span className="text-[#0F766E]"> Pharmacy Store</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover medicines, vitamins, skincare and personal care
              products in one simple and trusted place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded-xl bg-[#0F766E] px-6 py-3 font-semibold text-white transition hover:bg-[#115E59]"
              >
                Shop Products
              </a>

              <a
                href="/offers"
                className="rounded-xl border border-[#0F766E] bg-white px-6 py-3 font-semibold text-[#0F766E] transition hover:bg-[#ECFDF5]"
              >
                View Offers
              </a>
            </div>

          </div>

        </div>
      </section>

            {/* Categories Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              Shop by Category
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#132238]">
              Find What You Need
            </h2>

            <p className="mt-2 text-slate-500">
              Explore our pharmacy products by category.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

            <a
              href="/category/medicine"
              className="rounded-2xl bg-[#ECFDF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#132238]">
                Medicine
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Essential medicines
              </p>
            </a>

            <a
              href="/category/vitamins"
              className="rounded-2xl bg-[#ECFDF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#132238]">
                Vitamins
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Daily health support
              </p>
            </a>

            <a
              href="/category/skincare"
              className="rounded-2xl bg-[#ECFDF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#132238]">
                Skincare
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Care for your skin
              </p>
            </a>

            <a
              href="/category/personal-care"
              className="rounded-2xl bg-[#ECFDF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#132238]">
                Personal Care
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Everyday personal care
              </p>
            </a>

            <a
              href="/category/baby-care"
              className="rounded-2xl bg-[#ECFDF5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#132238]">
                Baby Care
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Gentle care for babies
              </p>
            </a>

          </div>

        </div>
      </section>

            {/* Featured Products Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
                Featured Products
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#132238]">
                Popular Products
              </h2>

              <p className="mt-2 text-slate-500">
                Some of our popular pharmacy products.
              </p>
            </div>

            <Link
              to="/products"
              className="hidden font-semibold text-[#0F766E] hover:text-[#115E59] sm:block"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Link
            to="/products"
            className="mt-8 block text-center font-semibold text-[#0F766E] sm:hidden"
          >
            View All Products
          </Link>

        </div>
      </section>
            {/* Offers Section */}
      <section className="bg-[#ECFDF5] px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#0F766E] px-6 py-10 sm:px-10 lg:flex-row">

            <div className="text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-100">
                Special Offers
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Save More on Your Health Essentials
              </h2>

              <p className="mt-4 max-w-xl text-emerald-50">
                Discover selected products and enjoy special prices
                while supplies last.
              </p>
            </div>

            <Link
              to="/offers"
              className="shrink-0 rounded-xl bg-white px-7 py-3 font-bold text-[#0F766E] transition hover:bg-[#F8FAFC]"
            >
              Explore Offers
            </Link>

          </div>

        </div>
      </section>
            {/* Why Choose Us Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#132238]">
              Simple, Trusted & Convenient
            </h2>

            <p className="mt-3 text-slate-500">
              Everything you need for a simple and comfortable shopping
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl text-[#0F766E]">
                ✓
              </div>

              <h3 className="mt-4 font-bold text-[#132238]">
                Trusted Products
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Carefully selected pharmacy products for your everyday needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl text-[#0F766E]">
                ★
              </div>

              <h3 className="mt-4 font-bold text-[#132238]">
                Quality First
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                We focus on quality and a clear shopping experience.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl text-[#0F766E]">
                ⚡
              </div>

              <h3 className="mt-4 font-bold text-[#132238]">
                Easy Shopping
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Find products quickly and place your order with ease.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl text-[#0F766E]">
                ♡
              </div>

              <h3 className="mt-4 font-bold text-[#132238]">
                Customer Care
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A simple experience designed around your needs.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;