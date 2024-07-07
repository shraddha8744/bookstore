import { createSlice } from "@reduxjs/toolkit";



export const recentalyAdded=createSlice({
    name:"recently",
    initialState:{
        fourBooks:null,
        allBooks:null,
        onebook:null,
        allFevBooks:null

    },
    reducers:{
        addBooks:(state,action)=>{
            state.fourBooks=action.payload

        },
        addAllBooks:(state,action)=>{
            state.allBooks=action.payload


        },
        addOneBooks:(state,action)=>{
            state.onebook=action.payload


        },
        allFevBooks:(state,action)=>{
            state.allFevBooks=action.payload


        }
    }
})

export const {addBooks,addAllBooks,addOneBooks,allFevBooks} =recentalyAdded.actions
export default recentalyAdded.reducer