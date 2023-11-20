'use client'
import Ediservice from '@/components/servicesection/editservice'
import Servicedetailsection from '@/components/servicesection/servicedetailsection'
import { useParams } from 'next/navigation'
import React from 'react'


function page() {
  const params=useParams()
  return (
    <div>
      {/* <Ediservice id={params.id}/> */}
      <Servicedetailsection id={params.id}/>
      
    </div>
  )
}

export default page
