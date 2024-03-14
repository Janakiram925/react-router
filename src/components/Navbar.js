import React from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth';

function Navbar() {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    const auth = useAuth();
  return (
    <nav class = 'primary-nav'>
        <NavLink style= {navLinkStyles} to='/'>Home</NavLink>
        <NavLink style= {navLinkStyles} to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='profile'>Profile</NavLink>
        {
            !auth.user && (
                <NavLink style= {navLinkStyles} to='/login'>Login</NavLink>
            )
        }
    </nav>
  )
}

export default Navbar