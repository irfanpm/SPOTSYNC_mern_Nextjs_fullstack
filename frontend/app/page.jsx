import Navbar from '@/components/Navbar'

import Carousels from "@/components/carousels";

import Categorylist from "@/components/categorysection";
import RandomImage from '@/components/randomimage';
import { Box, Container } from '@mui/material';


export default function Home() {
  return (
    <main  >
     
         <Container>
          <Navbar/>
      <RandomImage />
      <div className="mt-2">


      <div >
        <Categorylist />
      </div>
      </div>
    </Container> 
    </main>
  )
}
