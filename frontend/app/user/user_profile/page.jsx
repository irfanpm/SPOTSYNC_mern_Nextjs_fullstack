
import Edit_avatar from '@/components/edit_avatar'
import Userprofile from '@/components/user_profile'
import UserTab from '@/components/userfeatures'
import React from 'react'

function page() {
  return (
    <div className='row  mt-4  '>
      <div className='col-md-3'>
      <Userprofile/>

      </div>
      <div className='col-md-8'>
        <UserTab/>
        <Edit_avatar/>

      </div>
    </div>
  )
}

export default page
