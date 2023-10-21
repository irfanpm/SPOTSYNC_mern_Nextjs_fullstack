import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import getuser from "./features/getuser";

export const store = configureStore({
    reducer:{
        user:getuser ,
        Auth:auth 
    }




})

 