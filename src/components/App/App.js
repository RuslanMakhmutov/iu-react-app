import './app.css';
import Header from "../Header/Header";
import {HomePage} from "../../pages/HomePage";
import {ContactsPage} from "../../pages/ContactsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CatalogPage from "../../pages/CatalogPage";
import UserPage from "../../pages/UserPage";
import {UsersProvider} from "../../context/usersContext"
import {ErrorPage} from "../../pages/ErrorPage";

function App() {
    return (
        <UsersProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/catalog">
                        <Route index element={<CatalogPage/>}/>
                        <Route path=":id" element={<UserPage/>}/>
                    </Route>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </UsersProvider>
    );
}

export default App;
