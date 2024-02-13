import Styles from './main.module.css';
import {useState} from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cardDesc, setModalDesc] = useState('')

    const openModalHandler = () => {
        setIsModalOpen(true)
    }
    const closeModalHandler = () => {
        setIsModalOpen(false)
    }
    return (
        <main className={Styles.container}>
            <div className={Styles.cards}>
                <Card
                    openModal={openModalHandler}
                    setDesc={setModalDesc}
                    title="Карточка 1"
                    desc="Описание 1"
                />
                <Card
                    openModal={openModalHandler}
                    setDesc={setModalDesc}
                    title="Карточка 2"
                    desc="Описание 2"
                />
                <Card
                    openModal={openModalHandler}
                    setDesc={setModalDesc}
                    title="Карточка 3"
                    desc="Описание 3"
                />
            </div>

            {isModalOpen && <Modal
                closeModal={closeModalHandler}
                desc={cardDesc}
            />}
        </main>
    );
}

export default Main;
