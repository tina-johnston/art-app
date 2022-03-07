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
      const addProduct = action.payload;
      const productInCart = state.products.find(
        (product) => product.id === addProduct.id
      );
      state.subTotal = state.subTotal + addProduct.price;
      state.totalAmount++;
      state.update = true;
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
        productInCart.totalPrice = productInCart.totalPrice + addProduct.price;
        productInCart.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.totalAmount--;
      const id = action.payload;
      const productInCart = state.products.find((product) => product.id === id);
      state.subTotal = state.subTotal - productInCart.price;
      state.update = true;
      if (productInCart.totalQuantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        productInCart.totalPrice =
          productInCart.totalPrice - productInCart.price;
        productInCart.totalQuantity--;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
