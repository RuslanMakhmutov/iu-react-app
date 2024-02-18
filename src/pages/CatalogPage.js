import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";
import {useFetch} from "../components/customHooks/useFetch";

const CatalogPage = () => {
    const [users, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <main className="container">
            <h1>Список пользователей</h1>
            <div className="cards">
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

export default CatalogPage;
