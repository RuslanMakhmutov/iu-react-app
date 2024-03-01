import {useEffect} from "react";
// import usersJson from '../users.json'
import {addUsers, setIsLoading} from "../store/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getUsers} from "../store/usersSelectors";
import Card from "../components/Card";

const fetchData = () => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            // console.log(data)
            setTimeout(() => {
                dispatch(addUsers(data))
                dispatch(setIsLoading(false))
            }, 500)
        } catch (e) {
            console.log(e)
        }
    }
}

const HomePage = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(fetchData())
    }, [dispatch]);
    return (
        <main className="container">
            <h1>Страница доступна только авторизованным</h1>
            {
                isLoading && <div>Загрузка...</div>
            }
            {
                users.length > 0 &&
                users.map(user => {
                    return <ul>
                        <Card
                            user={user}
                            key={user.id}
                        />
                    </ul>
                })
            }
        </main>
    );
}

export default HomePage;
