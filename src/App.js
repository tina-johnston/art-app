import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions';
import ArtList from './components/Art/ArtList';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
let isInitial;
const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.toggleCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    //prevent empty cart and overriding current state
    if (isInitial) {
      isInitial = false;
      return;
    }
    //only if cart is updated not when fetched
    if (cart.update) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Header />
      <main>
        <ArtList />
      </main>
    </React.Fragment>
  );
};

export default App;
