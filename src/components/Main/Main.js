import Styles from './main.module.css';
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import {useFetch} from "../customHooks/useFetch";
import {useEffect} from "react";

const Main = () => {
    const [users, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users')

    // useEffect(() => {
    //     setIsLoading(true)
    //     // небольшая задержка для наглядности
    //     setTimeout(() => {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setData(() => data)
    //             })
    //             .finally(() => {
    //                 setIsLoading(false)
    //             })
    //     }, 1000)
    // }, []);

    useEffect(() => {
        console.log(users)
    }, [users]);


    return (
        <main className={Styles.container}>
            <h1>Список пользователей</h1>
            <div className={Styles.cards}>
                {isLoading && <Spinner/>}
                {
                    !isLoading && users.length > 0 &&
                    users.map((user) => {
                        return <Card
                            key={user.id}
                            user={user}
                        />
                    })
                }
            </div>
        </main>
    );
}

export default Main;
