import { cartActions } from './cart-slice';

//takes logic out of components

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
        //new object that doesnt contain update from initialstate
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
  //a function that returns a function as an action in a flow of steps
  return async (dispatch) => {
    //dispatch sending data
    const sendRequest = async () => {
      const response = await fetch(
        'https://products-b3623-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            //to prevent items from being undefined
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
      //create a notification state change in uiState
      //dispatch success message
    } catch (error) {
      //dispatch error message
    }
  };
};
