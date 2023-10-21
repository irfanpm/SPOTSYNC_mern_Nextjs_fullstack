import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    isloggin:true
}

const Authsection=createSlice(
    {
        name:"auth",
        initialState:initialState,
        reducers:{ 
            isLoggin:(state,action)=>{
                state.isloggin=false


            },
            isLogout:(state,action)=>{
                return initialState


            }




        }

    }
)
export const  {isLoggin,isLogout }=Authsection.actions
export default Authsection.reducer