import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    image:[]
}

const Serviceimage=createSlice(
    {
        name:"serviceimage",
        initialState:initialState,
        reducers:{ 
            send:(state,action)=>{
                state.image.push(action.payload)


            },
            receive:(state,action)=>{
                return initialState


            }




        }

    }
)
export const  {send,recieve }=Serviceimage.actions
export default Serviceimage.reducer