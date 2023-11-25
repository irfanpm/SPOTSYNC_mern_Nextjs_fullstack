'use client'
import Servicedetailsection from '@/components/servicesection/servicedetailsection'
import { useParams } from 'next/navigation'
import React from 'react'


function page() {
  const params=useParams()
  return (
    <div >
      <Servicedetailsection id={params.id}/>
      
    </div>
  )
}

export default page
