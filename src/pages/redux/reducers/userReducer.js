import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    list:[],
    favList:[]
}

const userReducer = createReducer(initialState, (builder)=>{
    builder.addCase('GET_MOVIE_LIST', (state, action) => {
        state.list=action.payload
    })
    builder.addCase('FAV_MOVIE_LIST', (state, action) => {
        state.favList=action.payload
    })
})

export default userReducer;