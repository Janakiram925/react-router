import React, { useState } from 'react'
import { useAuth } from './auth';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location.state?.path || '/';

    const handlelogin = () => {
        auth.login(user)
        // replace -  when after login when we click back button we will get login page again
        // to avoid this we use replace true
        navigate(redirectPath, {replace: true})
    }

  return (
    <div>
        <label>
            UseName: <input type='' onChange={(e) => setUser(e.target.value)}/>
        </label>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login