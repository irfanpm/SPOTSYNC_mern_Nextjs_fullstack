import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import getuser from "./features/getuser";
import getService from "./features/getService";
import serviceimage from "./features/serviceimage";
import deleteService from "./features/deleteService";
import findService from "./features/findService";


export const store = configureStore({
    reducer:{
        service:getService,
        user:getuser ,
        Auth:auth ,
        image:serviceimage,
        delete:deleteService,
        findservie:findService

    }




})

 