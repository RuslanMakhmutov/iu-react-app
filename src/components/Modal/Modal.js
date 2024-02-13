import Styles from './modal.module.css';

const Modal = (props) => {
    const onClick = () => {
        props.closeModal()
    }

    return (
        <div className={Styles.modal}>
            <div className={Styles.modal__content}>
                <p>{props.desc}</p>
                <button onClick={onClick}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal;
