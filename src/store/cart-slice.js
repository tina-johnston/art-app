import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: [], totalAmount: 0, subTotal: 0, update: false },
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.products = action.payload.products;
      state.subTotal = action.payload.subTotal;
    },
    addToCart(state, action) {
      //this is the added product
      const addProduct = action.payload;
      // is the product already in the cart?
      const productInCart = state.products.find(
        (product) => product.id === addProduct.id
      );
      state.subTotal = state.subTotal + addProduct.price;
      state.totalAmount++;
      state.update = true;
      // if new product and not in the exising array, and product
      if (!productInCart) {
        state.products.push({
          id: addProduct.id,
          image: addProduct.image,
          title: addProduct.title,
          price: addProduct.price,
          totalPrice: addProduct.price,
          totalQuantity: 1,
        });
      } else {
        // else update fields that change
        productInCart.totalPrice = productInCart.totalPrice + addProduct.price;
        productInCart.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.totalAmount--;
      //this is the item id to delete
      const id = action.payload;
      const productInCart = state.products.find((product) => product.id === id);
      state.subTotal = state.subTotal - productInCart.price;
      state.update = true;
      // if there is only one item then delete
      if (productInCart.totalQuantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        // reduce the price and quantity
        productInCart.totalPrice =
          productInCart.totalPrice - productInCart.price;
        productInCart.totalQuantity--;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
