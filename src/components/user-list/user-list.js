import React from 'react';
import UserListItem from '../user-list-item';

import './user-list.css'

const UserList = ({users, onDelete, getUserIndex}) => {
  
  const elements = users.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} style={{listStyleType: 'none'}}>
        <UserListItem 
          {...itemProps}
          onDelete={() => onDelete(id)}
          getUserIndex={() => getUserIndex(id)}
        />
      </li>
    )
  })
  
  return (
    <div className='list'>
      <div className='list-title'>
        <span>Name</span>
        <span>Phone</span>
        <span>Email</span>
        <span>Country</span>
        <span>Age</span>
      </div>
      <ul>
        {elements}
      </ul>
    </div>
  )
}

export default UserList;