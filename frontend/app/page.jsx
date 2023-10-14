import Navbar from '@/components/navbar'

import Carousels from "@/components/carousels";
import Categorylist from "@/components/categorysection";


export default function Home() {
  return (
    <main >
         <Navbar/>

         <div >
      <div className="mt-2">
        <Carousels />
      </div>
      <h1 className="text-center mt-3">Category</h1>

      <div >
        <Categorylist />
      </div>
    </div>
 
    </main>
  )
}
