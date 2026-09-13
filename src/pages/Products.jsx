import products from "../data/products";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
  const [search, setSearch] = useState("");
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
  };

  return (
    <div className="mx-auto max-w-8xl bg-[#EFE7D8]">

      <div className="relative flex h-[calc(100vh-56px)] ">

        {/* ================= SIDEBAR ================= */}

        {isSidebarOpen && (
          <div className="w-80 shrink-0 p-4 bg-[#192A45] border border-[#B89753]">
           <aside className="relative flex h-full w-72 shrink-0 flex-col rounded-2xl border border-[#B89753] bg-[#192A45]">

            {/* Sidebar Header */}
            <div className="shrink-0 border-b border-[#B89753] px-5 py-6">

              <h2 className="text-xl font-bold text-[#FFFFFF]">
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
                  className={`rounded-lg px-3 py-3 text-lg text-[#FFFFFF] text-left transition ${
                    categoryFilter === ""
                      ? "bg-[#2A3E5C] font-semibold"
                      : "hover:bg-[#2A3E5C]"
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
                    className={`rounded-lg px-3 py-3 text-[#FFFFFF] text-xl text-left transition ${
                      categoryFilter === category.slug
                        ? "bg-[#2A3E5C] font-semibold border border-[#4A6080]"
                        : "hover:bg-[#2A3E5C]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}

              </div>

            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close categories"
              className="absolute -right-4 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <FaChevronLeft className="text-xs" />
            </button>

           </aside>
          </div>
        )}

        {/* ================= MAIN CONTENT ================= */}

        <section className="min-w-0 flex-1 overflow-y-auto px-4 py-10">

          {/* Open Sidebar Button */}
          {!isSidebarOpen && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open categories"
              className="mb-6 flex h-9
               w-9 items-center justify-center
                rounded-full border border-gray-200 
                bg-white shadow-sm transition hover:shadow-md"
            >
              <FaChevronRight className="text-xs" />
            </button>
          )}

          {/* Page Title */}
          <div className="mb-6">

            <h1 className="text-3xl font-bold">
              All Products
            </h1>

            <p className="mt-2 text-sm text-gray-500">
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
              className="w-full rounded-lg border border-[#D2C4AE] bg-[#FFFFFF]  px-4 py-3 outline-none"
            />

          </div>

          {/* Price + Sort */}
          <div className="mb-8 flex flex-wrap items-center gap-4">

            <select
              value={priceFilter}
              onChange={(e) =>
                setPriceFilter(e.target.value)
              }
              className="rounded-lg border border-[#D2C4AE] px-3 py-2 bg-[#FFFFFF]"
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
              className="rounded-lg border border-[#D2C4AE] px-3 py-2 bg-[#FFFFFF]"
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
                className="rounded-lg border border-gray-300 px-4 py-2"
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

            <div className="py-16 text-center">

              <p className="text-lg font-medium">
                No products found.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>

            </div>

          )}

        </section>

      </div>

    </div>
  );
};

export default Products;