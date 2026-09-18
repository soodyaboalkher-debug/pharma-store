
import products from "../data/products";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";

  const [search, setSearch] = useState(searchFromUrl);



  const [categoryFilter, setCategoryFilter] = useState("");

  const [priceFilter, setPriceFilter] = useState("");

  const [sort, setSort] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "" ||
      product.category === categoryFilter;

    const matchesPrice =
      priceFilter === "" ||
      (priceFilter === "under150" && product.price < 150) ||
      (priceFilter === "150to250" &&
        product.price >= 150 &&
        product.price <= 250) ||
      (priceFilter === "over250" && product.price > 250);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort Products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") {
      return a.price - b.price;
    }

    if (sort === "high") {
      return b.price - a.price;
    }

    return 0;
  });

  // Clear Filters
  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("");
    setPriceFilter("");    
    setSort("");                

    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <div className="relative flex items-start">

        {/* ================= SIDEBAR ================= */}

        {isSidebarOpen && (
          <div className="sticky top-[56px] h-[calc(100vh-56px)] w-80 shrink-0 bg-[#F0FDFA] p-4">

            <aside className="relative flex h-full w-72 shrink-0 flex-col rounded-2xl border border-[#CCFBF1] bg-white shadow-sm">

              {/* Sidebar Header */}
              <div className="shrink-0 border-b border-[#CCFBF1] px-5 py-6">

                <p className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                  Browse
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#183B43]">
                  Categories
                </h2>

              </div>

              {/* Categories Scroll Area */}
              <div className="sidebar-scroll flex-1 overflow-y-auto px-4 py-5">

                <div className="flex flex-col gap-2">

                  {/* All Categories */}
                  <button
                    type="button"
                    onClick={() => setCategoryFilter("")}
                    className={`rounded-xl px-3 py-3 text-left text-base transition ${
                      categoryFilter === ""
                        ? "bg-[#CCFBF1] font-bold text-[#0F766E]"
                        : "text-slate-600 hover:bg-[#F0FDFA] hover:text-[#0F766E]"
                    }`}
                  >
                    All Categories
                  </button>

                  {/* Categories */}
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() =>
                        setCategoryFilter(category.slug)
                      }
                      className={`rounded-xl px-3 py-3 text-left text-base transition ${
                        categoryFilter === category.slug
                          ? "bg-[#CCFBF1] font-bold text-[#0F766E]"
                          : "text-slate-600 hover:bg-[#F0FDFA] hover:text-[#0F766E]"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}

                </div>

              </div>

              {/* Close Sidebar Button */}
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close categories"
                className="absolute -right-4 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#CCFBF1] bg-white text-[#0F766E] shadow-md transition hover:bg-[#CCFBF1]"
              >
                <FaChevronLeft className="text-xs" />
              </button>

            </aside>
          </div>
        )}

        {/* ================= MAIN CONTENT ================= */}

        <section className="min-w-0 flex-1 overflow-y-auto bg-[#F8FAFC] px-4 py-10 sm:px-6 lg:px-8">

          {/* Open Sidebar Button */}
          {!isSidebarOpen && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open categories"
              className="fixed left-2 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#CCFBF1] bg-white text-[#0F766E] shadow-md transition hover:bg-[#CCFBF1] hover:shadow-md"
            >
              <FaChevronRight className="text-xs" />
            </button>
          )}

          {/* Page Title */}
          <div className="mb-6">

            <p className="text-sm font-bold uppercase tracking-wider text-[#14B8A6]">
              Pharmacy Products
            </p>

            <h1 className="mt-1 text-3xl font-bold text-[#183B43]">
              All Products
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              {sortedProducts.length} products found
            </p>

          </div>

          {/* Search */}
          <div className="mb-6">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#183B43] outline-none transition placeholder:text-slate-400 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#CCFBF1]"
            />

          </div>

          {/* Price + Sort */}
          <div className="mb-8 flex flex-wrap items-center gap-4">

            <select
              value={priceFilter}
              onChange={(e) =>
                setPriceFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[#183B43] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#CCFBF1]"
            >
              <option value="">
                All Prices
              </option>

              <option value="under150">
                Under 150 EGP
              </option>

              <option value="150to250">
                150 - 250 EGP
              </option>

              <option value="over250">
                Over 250 EGP
              </option>
            </select>

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[#183B43] outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#CCFBF1]"
            >
              <option value="">
                Sort By
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>
            </select>

            {(search ||
              categoryFilter ||
              priceFilter ||
              sort) && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-xl border border-[#14B8A6] bg-white px-4 py-2 text-sm font-bold text-[#0F766E] transition hover:bg-[#F0FDFA]"
              >
                Clear Filters
              </button>
            )}

          </div>

          {/* Products */}
          {sortedProducts.length > 0 ? (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          ) : (

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-16 text-center shadow-sm">

              <p className="text-lg font-bold text-[#183B43]">
                No products found.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-[#14B8A6] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0F766E]"
              >
                Clear Filters
              </button>

            </div>

          )}

        </section>

      </div>

    </div>
  );
};

export default Products;

