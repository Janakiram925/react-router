import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products() {
    return (
        <>
            <div>
                <input type='search' placeholder='search products' />
            </div>
            <nav>
                <Link to='featuredProducts'>Featured</Link>
                <Link to='newProducts'>New</Link>
            </nav>
            <Outlet />

        </>

    )
}

export default Products