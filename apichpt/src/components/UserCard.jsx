import React from 'react'

const UserCard = ({el}) => {
  return (
    <div className='card'>
      <h1>Name: {el.name} </h1>
      <h1>Email: {el.email} </h1>
      <h1>Phone: {el.phone} </h1>
    </div>
  )
}

export default UserCard
