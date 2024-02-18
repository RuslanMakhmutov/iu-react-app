import Styles from '../components/Card/card.module.css';
import Spinner from "../components/Spinner/Spinner";
import {useFetch} from "../components/customHooks/useFetch";
import {Link, useParams} from "react-router-dom";

const UserPage = () => {
    const {id} = useParams()
    const [user, isLoading] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    return (
        <main className="container">

            {isLoading && <Spinner/>}
            {
                !isLoading && typeof user.id !== 'undefined' &&
                <>
                    <h1>Пользователь {user.name}</h1>

                    <img
                        src={`https://ui-avatars.com/api/?size=128&background=random&name=${user.name}`}
                        alt={user.username}
                        width={128}
                        height={128}
                    />
                    <h5 style={{margin: '0.5rem 0'}}>Никнейм {user.username}</h5>
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
                </>
            }

            <Link to="/catalog" style={{marginTop: '30px', display: 'inline-block'}}>НАЗАД</Link>
        </main>
    );
}

export default UserPage;
