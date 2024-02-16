import Styles from './modal.module.css';
import {useEffect} from "react";

const Modal = (props) => {
    const {isOpen, close} = props

    useEffect(() => {
        console.log('смонтирован')

        return () => {
            console.log('размонтирован')
        }
    }, []);

    if (isOpen === false) {
        return null
    }

    return (
        <div className={Styles.modal}>
            <div className={Styles.modal__content}>
                <p>{props.desc}</p>
                <button onClick={() => close()}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal;
