import { toast } from "react-toastify";

const cartReducer = (state, action) => {

  
  if (action.type === "ADD_TO_CART") {
    let {amount, singleProduct} = action.payload;

    console.log(amount,222);
    console.log(singleProduct,1111);
  
    toast.success("Add to cart in successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });




    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === singleProduct.id
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id ===  singleProduct.id) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
      
    } else {
      let cartProduct = {
        id: singleProduct.id,
        name: singleProduct.name,
        amount,
        price: singleProduct.price,
        max: singleProduct.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the  decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // to set the increment

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // to Cart Total Item

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

   // to empty or to clear to cart
   if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

    // to Cart Total Price

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;
      // 25000 + 0 = 25000
      // 10199 + 25000 = 121

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    toast.success("Card has been deleted", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return {
      ...state,
      cart: updatedCart,
    };
    
  }

  return state;
};

export default cartReducer;
