'use client'
import Showservice from '@/components/showservice'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const params=useParams()
  return (
    <div >
      <Showservice category={params.category}/>
      
    </div>
  )
}

export default page
