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


            }




        }

    }
)
export const  {isLoggin }=Authsection.actions
export default Authsection.reducer