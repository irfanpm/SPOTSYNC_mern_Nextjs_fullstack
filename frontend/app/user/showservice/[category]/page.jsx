'use client'
import Showservice from '@/components/showservice'
import { Container } from '@mui/material'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const params=useParams()
  return (
    <>
    <Container>
    <Showservice category={params.category}/>
    </Container>
    </>
      
  )
}

export default page
