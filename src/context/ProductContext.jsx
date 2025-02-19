import { createContext } from "react";
import { products } from '../assets/products';
const ProductContext = createContext();

const ProductContextProvider = (props) => {
    console.log('pro', products)
  const value = {
    products, // Example: Replace with actual product data or state
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductContextProvider;
