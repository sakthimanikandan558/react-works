import React from 'react'
import { useUserContext } from './UserContext'

const Welcome = () => {
  const { user, logout } = useUserContext(); // Access user and logout  

  return (
      <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={logout}>Logout</button>
      </div>
  );
}

export default Welcome