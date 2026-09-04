import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Products = () => {

//  ستات خاصه بالبحث في البروداكتس عامه
  const[search , setSearch]=useState("");

// ستات حاصه بالبحث عن طريق كاتيجورى
  const [categoryFilter, setCategoryFilter] = useState("");



// ستات خاصه بالفلتره علي حسب تحديد سعر
  const [priceFilter, setPriceFilter] = useState("");

// ستات خاصه بالفلتره من السعر الاعلي للاقل والعكس
  const [sort, setSort] = useState("");


// دالة البحث في البروداكتس او كاتيجورى او حسب فلترة السعر 
  const filteredProducts= products.filter((product)=>{
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "" || product.category === categoryFilter;

    const matchesPrice = priceFilter === "" ||
    (priceFilter === "under150" && product.price < 150)||
    (priceFilter === "150to250" && product.price >= 150 &&
      product.price <= 250
    )||
    (priceFilter === "over250" && product.price > 250)
    return matchesSearch && matchesCategory && matchesPrice;
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

// الدبف اللى شايل صفحة البروداكتس كامله
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/*  عنوان صفحة البروداكتس */}
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/*انبوت البحث في البروداكتس */}
      <input type="text"
      placeholder="search products..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full border border-gray-300 
      rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2
      focus:ring-blue-500" />

      {/*سيليكت واوبشانز للعرض والبحث حسب الكاتيجورى */}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        <option value="medicine">Medicine</option>
        <option value="vitamins">Vitamins</option>
        <option value="skincare">Skincare</option>
        <option value="personal-care">Personal Care</option>
        <option value="baby-care">Baby Care</option>
      </select>

      {/*سيلكت وابشن لتحديد السعر في الفلتره */}
      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Prices</option>
        <option value="under150">Under 150 EGP</option>
        <option value="150to250">150 - 250 EGP</option>
        <option value="over250">Over 250 EGP</option>
      </select>
     
       {/*سيلكت وابشنز خاص بالفلتره من الاعلي للاقل والعكس */}
      <select 
       value={sort}
       onChange={(e)=>setSort(e.target.value)}
       className="border border-gray-300 rounded-lg px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Sort By</option>
        <option value="low">Price: Low to High </option>
        <option value="high">Price: High to Low </option>


      </select>


      {/*بنمرر معلومات البروداكت للكارت عشان يعرضها */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product)=>(
          <ProductCard
          key={product.id}
          product={product}
          />

        ))}
      </div>

  
    </div>
  );
};

export default Products;