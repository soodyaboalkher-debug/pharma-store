const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* About Header */}
      <section className="bg-[#ECFDF5] px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
            About PharmaStore
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-[#132238] sm:text-5xl">
            A Simple and Modern Way to
            <span className="text-[#0F766E]"> Shop for Your Health</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            PharmaStore is a pharmacy e-commerce project designed to make
            finding and shopping for everyday healthcare products simple,
            clear and convenient.
          </p>

        </div>
      </section>

      {/* Our Mission */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#132238]">
                Making pharmacy shopping easier
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our goal is to create a clean and easy-to-use pharmacy
                shopping experience where customers can discover products,
                compare prices, manage their cart and place orders with ease.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                PharmaStore focuses on clear information, simple navigation
                and a modern interface that works comfortably across
                different screen sizes.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0F766E] p-8 text-white shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold">
                Built with simplicity in mind
              </h3>

              <p className="mt-4 leading-7 text-emerald-50">
                From browsing products to completing an order, every part
                of the experience is designed to be straightforward and
                comfortable for the customer.
              </p>
            </div>

          </div>

        </div>
      </section>

            {/* Our Values */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              Our Values
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#132238]">
              What We Focus On
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl font-bold text-[#0F766E]">
                ✓
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#132238]">
                Simplicity
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Clear navigation and a simple shopping experience.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl font-bold text-[#0F766E]">
                ♥
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#132238]">
                Customer First
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A shopping experience designed around customer needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ECFDF5] text-xl font-bold text-[#0F766E]">
                ★
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#132238]">
                Quality
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Organized products and clear information for every customer.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;