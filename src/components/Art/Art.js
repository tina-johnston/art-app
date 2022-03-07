import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import styles from './Art.module.css';
import Card from '../UI/Card';

const Art = (props) => {
  const dispatch = useDispatch();
  const { id, title, image, description, price } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        image,
        title,
        price,
      })
    );
  };
  return (
    <Card>
      <img className={styles.image} src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>£{price.toFixed(2)}</h3>
      <button onClick={addToCartHandler}>add to cart</button>
      <button>heart</button>
    </Card>
  );
};

export default Art;
