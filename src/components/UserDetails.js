import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    //useParams returns an object with key value pair
    const params = useParams();
    const userId = params.userId;
  return (
    <div>Details abourt user - {userId}</div>
  )
}

export default UserDetails