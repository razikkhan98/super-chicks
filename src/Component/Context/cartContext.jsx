import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("superChicks");
  if (localCartData == null || localCartData.length === 0) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};


const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 30,
};

const CartProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [orderPayment, setOrderPayment] = useState()
  const [singleImage, setSingleImage] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, singleProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, singleProduct } });
    console.log(id, amount, singleProduct)


  };

  // increment and decrement the product

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

    // to remove the individual item from cart

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("superChicks", JSON.stringify(state.cart));
  }, [state.cart]);

  const [singleProduct, setSingleProduct] = useState([]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,setDecrement ,setIncrement,loggedInUser,setLoggedInUser,orderPayment,setOrderPayment ,clearCart ,singleImage,setSingleImage ,singleProduct, setSingleProduct}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };