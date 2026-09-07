import { createContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState([]);

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