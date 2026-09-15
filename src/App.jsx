import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



const App = () => {
  return (
   

    <BrowserRouter>
     <ScrollToTop />
     <div className="flex min-h-screen flex-col">
      <Navbar />
 

      <Routes>

        <Route path="/products" element={<Products />} />
         <Route path="/" element={<Home />} />
         <Route path="/offers" element={<Offers />} />
         <Route path="/about" element={<About />} />
         <Route path="/products/:id" element={<ProductDetails />}/>
         <Route path="/cart" element={<Cart />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route  path="/orderconfirmation" element={<OrderConfirmation />}/>
         <Route path="/orders" element={<Orders />} />
         <Route path="/account" element={<Account />} />

  

  

         <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />

     </div>
    </BrowserRouter>
  );
};

export default App;