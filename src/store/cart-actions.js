import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://products-b3623-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const data = response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          products: cartData.products || [],
          totalAmount: cartData.totalAmount,
          subTotal: cartData.subTotal,
        })
      );
    } catch (error) {
      //error message
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    //dispatch sending data
    const sendRequest = async () => {
      const response = await fetch(
        'https://products-b3623-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            products: cart.products || [],
            totalAmount: cart.totalAmount,
            subTotal: cart.subTotal,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('something went wrong');
      }
    };
    try {
      await sendRequest();
      //dispatch success message
    } catch (error) {
      //dispatch error message
    }
  };
};
