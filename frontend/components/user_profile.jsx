'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Userprofile = () => {
  const[user,setuser]=useState()
  console.log(user);
  useEffect(()=>{async()=>{
    try{

     const userData= await axios.get('http://127.0.0.1:8000/api/user/profile')
      setuser(userData)
      

    }catch(error){
      console.log(err);

    }
  }

  },[user])
  return (
    <div>
      <h1>Profile</h1>
      {
        user.map((item)=>{
          <li>{item.Username}</li>
        })
      }
    </div>
  )
}

export default Userprofile