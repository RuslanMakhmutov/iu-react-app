import {createContext, useContext, useState} from "react";

const context = createContext({})

export const useUsersContext = () => useContext(context)

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])

    return <context.Provider value={{users, setUsers}}>{children}</context.Provider>
}