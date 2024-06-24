import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from "axios"
const UserList = () => {
  const [users, setusers] = useState([])
  useEffect(() => {
    
      (async()=>{
        try{
          let result=await axios.get("https://jsonplaceholder.typicode.com/users")
          setusers(result.data)
        }
        catch(error){
          console.log(error)
        }
      }
    
      )()
  }, [])
  
    
  return (
    <div>
      {users.map(el=><UserCard el={el} />)}
    </div>
  )
}

export default UserList

