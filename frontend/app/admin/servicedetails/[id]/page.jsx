'use client'
import AdminServicedetailsection from '@/components/admin/adminservicedetails'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params=useParams()

  return (
    <div>
        <AdminServicedetailsection id={params.id}/>
      
    </div>
  )
}

export default page
