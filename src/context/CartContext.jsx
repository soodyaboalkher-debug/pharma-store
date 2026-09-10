import { createContext, useState } from "react";



const CartContext = createContext();

const CartProvider = ({ children }) => {

// ستات لتخزين بيانات السله 
 const [cartItems, setCartItems] = useState([]);

// هندلة زر الاضافة الى السله
 const addToCart = (product, quantity) => {

  const existingProduct = cartItems.find((item)=>item.id === product.id)

 if (existingProduct) {

  const newQuantity = existingProduct.quantity + quantity;

  
    setCartItems((oldItems) =>
      oldItems.map((item) =>
        item.id === product.id
      ? { ...item, quantity:Math.min(product.stock,newQuantity) }
      : item
  )
 );

 } else {
  setCartItems((oldItems) => [...oldItems, {...product,quantity,}, ]);
 }

 };


 const increaseQuantity = (id) => {
  setCartItems((oldItems) =>
    oldItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.min (item.stock, item.quantity + 1) }
        : item
    )
   );
 };

const decreaseQuantity = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  );
};

const removeFromCart = ( id)=>{
  setCartItems((oldItems)=> oldItems.filter((item)=>item.id !== id))
}


const clearCart = () => {setCartItems([])};



  return (
    <CartContext.Provider 
    value={{ cartItems, addToCart, increaseQuantity ,decreaseQuantity ,removeFromCart,clearCart}}>
    {children}
    </CartContext.Provider>
  );
};



export { CartProvider };
export default CartContext;
