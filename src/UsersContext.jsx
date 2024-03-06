import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UserProvider = ({children})=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers = async()=>{
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    }

    return(
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUser = () => useContext(UsersContext);