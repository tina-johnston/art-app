import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import CartIcon from '../../assets/CartIcon';
import styles from './HeaderCartButton.module.css';
import HeartIcon from '../../assets/HeartIcon';
const HeaderCartButton = (props) => {
  const dispatch = useDispatch();

  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  //total updated 
  const totalInCart = useSelector((state) => state.cart.totalAmount);
  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>
        <HeartIcon />
      </span>
      
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <div className={styles.count}>{totalInCart}</div>
    </button>
  );
};

export default HeaderCartButton;
