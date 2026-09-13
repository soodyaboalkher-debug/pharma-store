import { createContext, useState ,useEffect} from "react";





const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState(()=>{

    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist):[]
  });

  useEffect(() => {localStorage.setItem("wishlist" , JSON.stringify(wishlistItems)); },[wishlistItems]);

  const toggleWishlist = (product) => {

    const existingProduct = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setWishlistItems((oldItems) =>
        oldItems.filter((item) => item.id !== product.id)
      );

    } else {

      setWishlistItems((oldItems) => [
        ...oldItems,
        product,
      ]);

    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider };
export default WishlistContext;