const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
    let {id, amount, singleProduct} = action.payload;
      console.log(
        // "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
        singleProduct
      );
  
      let cartProduct;
  
      cartProduct = {
        id: id ,
        name: singleProduct.name,
        amount,
        image: singleProduct.image[0].url,
        price: singleProduct.price,
        max: singleProduct.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    return state;
  };
  
  export default cartReducer;