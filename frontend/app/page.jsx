import Navbar from '@/components/Navbar'

import Carousels from "@/components/carousels";

import Categorylist from "@/components/categorysection";
import { Container } from '@mui/material';


export default function Home() {
  return (
    <main  >
         <Navbar/>

         <Container maxWidth="xl">

      <div className="mt-2">
        <Carousels />
      </div>
      <h1 className="text-center mt-3">Category</h1>

      <div >
        <Categorylist />
      </div>
    </Container> 
    </main>
  )
}
