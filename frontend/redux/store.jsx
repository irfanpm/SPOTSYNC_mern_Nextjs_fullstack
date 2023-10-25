import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import getuser from "./features/getuser";
import getService from "./features/getService";


export const store = configureStore({
    reducer:{
        service:getService,
        user:getuser ,
        Auth:auth 
    }




})

 