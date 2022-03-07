import a from '../../assets/a.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>art</h1>

        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={a} alt='abstract art' />
      </div>
    </>
  );
};

export default Header;
