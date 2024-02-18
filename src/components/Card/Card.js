import Styles from './card.module.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    const {user} = props

    const randomColor = () => {
        return Math.floor(Math.random()*16777215).toString(16)
    }

    return (
        <div className={Styles.card}>
            <div className={Styles.card__inner}>
                <Link to={`/catalog/${user.id}`}>
                    <img
                        src={`https://ui-avatars.com/api/?size=128&background=random&name=${user.name}&color=${randomColor()}`}
                        alt={user.username}
                        width={128}
                        height={128}
                    />
                </Link>
                <h5 style={{margin: '0.5rem 0'}}><Link to={`/catalog/${user.id}`}>{user.name}</Link></h5>
                <p style={{margin: 0}}>
                    <a
                        className={Styles.card.a}
                        style={{color: 'darkred'}}
                        href={`mailto:${user.email}`}
                    >{user.email}</a>
                </p>
                <p style={{margin: 0}}>
                    <a
                        className={Styles.card.a}
                        style={{color: 'navy'}}
                        href={`tel:${user.phone}`}
                    >{user.phone}</a>
                </p>
            </div>
        </div>
    );
}

export default Card;
