import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext =createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const  [token,setToken] = useState(null);
    const navigate = useNavigate();
    const login=(newUser,newToken)=>{
        setUser(newUser);
        setToken(newToken);
        localStorage.setItem('token',newToken);
        navigate('/welcome')
    }
    const logout=()=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        navigate('/login')
    }

  return (
    <UserContext.Provider value={{user, token, login, logout}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUserContext=()=> useContext(UserContext);  //use this hook to get the context in any component