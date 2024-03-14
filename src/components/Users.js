import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom';
// to add or emove params we use searchParams
// searchParams works similar to useState hook, stores data in url.

function Users() {
    const [searchParams, setsearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
    </div>
    <Outlet />
    <button onClick={() => setsearchParams({filter:'active'})}>Active Users</button>
    <button onClick={() => setsearchParams({})}>Reset filters</button>
    {
        showActiveUsers ? <h1>showing active users</h1> : <h1>showing all users</h1>
    }
    </>
    
  )
}

export default Users