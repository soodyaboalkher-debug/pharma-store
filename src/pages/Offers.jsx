import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Offers = () => {
  const offerProducts = products.filter(
    (product) => product.isOffer === true
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Offers Header */}
      <section className="bg-[#ECFDF5] px-4 py-14">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
            Special Offers
          </p>

          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-[#132238] sm:text-5xl">
            Great Deals for Your
            <span className="text-[#0F766E]"> Everyday Health</span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Discover our current special offers and enjoy great prices
            on selected pharmacy products.
          </p>

        </div>
      </section>

      {/* Offers Products */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-[#132238]">
              Available Offers
            </h2>

          <span className="w-fit rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#0F766E]">
            {offerProducts.length} Offers Available
          </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Offers;