import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import styles from './CartProduct.module.css';
const CartProduct = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, image, totalQuantity } = props;

  const removeHandler = () => {
    //id is payload
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    //item is payload
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        totalQuantity,
      })
    );
  };

  return (
    <>
      <li className={styles['cart-item']}>
        <div>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <div className={styles.total}>
            <span className={styles.actions}>
              <h3>quantity</h3>
              <button onClick={removeHandler}>-</button>
              {totalQuantity}
              <button onClick={addHandler}>+</button>
            </span>
            <span />
            <span>
              <h3>price</h3>
              {price.toFixed(2)}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartProduct;
