import React from 'react'
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout();
        navigate('/')
        
    }
  return (
    <div>
        <h1>welcome {auth.user}</h1>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile