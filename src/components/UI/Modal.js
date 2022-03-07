import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styles from './Modal.module.css';


const Modal = (props) => {

  const dispatch = useDispatch();
  
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={toggleCartHandler} />;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };
  const portalElement = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={toggleCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
