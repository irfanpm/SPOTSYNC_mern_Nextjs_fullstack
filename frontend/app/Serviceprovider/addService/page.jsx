import Addbusiness from '@/components/addBusiness'
import React from 'react'
import { Container } from '@mui/material';
import Addservice from '@/components/servicesection/addservice';
import LinaerStepper from '@/components/servicesection/addservicestepper';


function page() {
  return (
    <Container className='mt-5' >
      {/* <Addservice/> */}
      <LinaerStepper/>
      
        </Container>
  )
}

export default page
