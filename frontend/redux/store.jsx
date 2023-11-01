import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import getuser from "./features/getuser";
import getService from "./features/getService";
import serviceimage from "./features/serviceimage";


export const store = configureStore({
    reducer:{
        service:getService,
        user:getuser ,
        Auth:auth ,
        image:serviceimage

    }




})

 