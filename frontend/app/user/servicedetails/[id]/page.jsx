'use client'
import Servicedetails from '@/components/Servicedetails'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const params=useParams()
  
  return (
    <div>
    <Servicedetails id={params.id}/>
    </div>
  )
}

export default page
