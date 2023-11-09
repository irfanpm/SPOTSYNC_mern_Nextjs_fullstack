'use client'
import Ediservice from '@/components/servicesection/editservice'
import { useParams } from 'next/navigation'
import React from 'react'


function page() {
  const params=useParams()
  return (
    <div>
      <Ediservice id={params.id}/>
      
    </div>
  )
}

export default page
