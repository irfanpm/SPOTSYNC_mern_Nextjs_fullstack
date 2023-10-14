import Carousels from "@/components/carousels";
import Categorylist from "@/components/categorysection";

import React from "react";
const page = () => {
  return (

    <div >
      <div className="mt-2">
        <Carousels />
      </div>
      <h1 className="text-center mt-3">Category</h1>

      <div >
        <Categorylist />
      </div>
    </div>
  );
};

export default page;
