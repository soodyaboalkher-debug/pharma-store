import { useParams } from "react-router-dom";
import products from "../data/products";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Category = () => {
const { category } = useParams();

const [sort, setSort] = useState("");

const [priceFilter, setPriceFilter] = useState("");



//الداله دي بتلف علي الكاتيجورى بتاعنا عشان تجيب ال سولج اللى مطابق للكاتيجورى اللى راجع من
//  الديناميك روتر
const currentCategory = categories.find(

  (item) => item.slug === category
);

//بنقول لو currentcategory مش موجود اعرض category not found
if (!currentCategory) {
  return (
    <div>
      <h1>Category Not Found</h1>
    </div>
  );
}
// داله بتجيب الكاتيجورى من البروداكتس وترجع كل الكاتيجورى المطابق للكاتيجورى بتاعنا
  const categoryProducts = products.filter(
  (product) => product.category === category
);

const filteredProducts = categoryProducts.filter((product) => {
  if (priceFilter === "under150") {
    return product.price < 150;
  }

  if (priceFilter === "150to250") {
    return product.price >= 150 && product.price <= 250;
  }

  if (priceFilter === "over250") {
    return product.price > 250;
  }

  return true;
});

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sort === "low") {
    return a.price - b.price;
  }

  if (sort === "high") {
    return b.price - a.price;
  }

  return 0;
});

return (
  <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-5">
         <div>

            {/*عرض اسم الكاتيجورى اللى انا في صفحته المكان اعلي صفحة الكاتيجورى */}
            <h1 className="text-3xl font-bold text-slate-900">
            {currentCategory.name}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
            Showing {categoryProducts.length} products
            </p>
         </div>
        </div>


         {/*عرض عدد منتجات الكاتيجورى */}
        <div className="mb-6 flex flex-col gap-4 rounded-xl
         border border-slate-200 bg-white p-4 sm:flex-row sm:items-center
          sm:justify-between">

            <p className="text-sm text-slate-600">
                {sortedProducts.length} products available
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500"
              >
                <option value="">All Prices</option>
                <option value="under150">Under 150 EGP</option>
                <option value="150to250">150 - 250 EGP</option>
                <option value="over250">Over 250 EGP</option>
              </select>
                          
              {/*فلترة الاصناف المعروضه حسب السعر من الاعلى للاقل والعكس */}
              <select className="rounded-lg border border-slate-200
                bg-white px-3 py-2 text-sm text-slate-700 outline-none
                focus:border-blue-500"
                value={sort}
                onChange={(e) => setSort(e.target.value)}>
                  <option value="">Sort by</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
              </select>

            </div>


            {/*زرار كلير يرجع البرايس فلتر والسورت للحاله الطبيعيه كاننا محددناش لاسورت ولا برايس */}
            {(priceFilter || sort) && (
                <button
                  onClick={() => {
                    setPriceFilter("");
                    setSort("");
                  }}
                  className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
                >
                  Clear
                </button>
              )}
        </div>

       {/*عرض الكاتيجوى في صفحته بناء على شرط */}
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
        <p className="text-slate-500">
          No products found in this category.
        </p>
      )}

    </div>
  </div>
);
};

export default Category;