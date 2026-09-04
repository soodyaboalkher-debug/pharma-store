import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Category from "./pages/Category";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
 

      <Routes>
        <Route path="/products" element={<Products />} />
         <Route path="/" element={<Home />} />
         <Route path="/offers" element={<Offers />} />
         <Route path="/about" element={<About />} />

         
         <Route path="/category/:category" element={<Category />} />
      </Routes>


    </BrowserRouter>
  );
};

export default App;