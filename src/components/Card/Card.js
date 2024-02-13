import Styles from './card.module.css';

const Card = (props) => {
    const onClick = () => {
        props.openModal()
        props.setDesc(props.desc)
    }

    return (
        <div className={Styles.card}>
            <div className={Styles.card__inner}>
                <img src="https://placehold.co/300x200/orange/white" alt=""/>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button onClick={onClick}>Показать подробное описание</button>
            </div>
        </div>
    );
}

export default Card;
