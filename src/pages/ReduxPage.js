import {useEffect} from "react";
import usersJson from '../users.json'
import {addUsers} from "../store/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../store/usersSelectors";
import UserCard from "../components/UserCard";

const ReduxPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)

    useEffect(() => {
        dispatch(addUsers(usersJson))
    }, [dispatch]);
    return (
        <main className="container">
            <h1>Я главная страница Redux</h1>
            {
                users.length > 0 &&
                users.map(user => {
                    return <ul>
                        <UserCard
                            user={user}
                            key={user.id}
                        />
                    </ul>
                })
            }
        </main>
    );
}

export default ReduxPage;
