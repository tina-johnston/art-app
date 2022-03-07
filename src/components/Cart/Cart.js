import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
//import styles from './Cart.module.css';
import CartProduct from './CartProduct';

const Cart = (props) => {
  const dispatch = useDispatch();

  //<h3>Subtotal</h3>£{totalPrice.toFixed(2)}
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const cartProducts = useSelector((state) => state.cart.products);

  const subTotal = useSelector((state) => state.cart.subTotal);

  return (
    <Modal>
      <h3>shopping cart</h3>

      <ul className={styles['cart-items']}>
        {cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            totalQuantity={product.totalQuantity}
          />
        ))}
      </ul>
      <div>
        <span><h3>subtotal</h3>{`£${subTotal.toFixed(2)}`}</span>
        <div className={styles.actions}>
          <button className={styles['button-alt']} onClick={toggleCartHandler}>
            close
          </button>
          <button className={styles.button}>order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
