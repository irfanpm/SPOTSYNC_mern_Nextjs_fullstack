'use client'
import React, { useState } from 'react'
import upload from './upload'
import axios from 'axios'
import { getCookie } from "cookies-next";


function Edit_avatar() {
    const cookie=getCookie('token')
    const[avatar,setavatar]=useState(null)
    console.log(avatar)
    const handleupload= async()=>{
        try{
            const url=await upload(avatar)
            console.log(url)

            await axios.put('http://127.0.0.1:8000/api/user/profile/avatar',
            {
                avatar:url

            },
            {
           headers: {
                    Authorization: `Bearer ${cookie}`,
                  }
                }

            )

              


        }catch(error){
            console.log("from upload",error.message);
        }


    }
    const uploadavatar=  async (e)=>{
        setavatar(e.target.files[0])

    }
    const handleavatar=(e)=>{
        e.preventDefault()

    }

  return (
    <div>
      <form action="" onSubmit={handleavatar}>
        <input type="file" onChange={(e)=>uploadavatar(e)} />
        <button type='submit' onClick={()=>handleupload()} >upload</button>
      </form>
    </div>
  )
}

export default Edit_avatar
