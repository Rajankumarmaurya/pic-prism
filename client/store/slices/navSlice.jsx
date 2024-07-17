import { createSlice } from '@reduxjs/toolkit';
const navSlice= createSlice({
    name:"nav",

    initialState:{
        sidebar: false,
        tab:"",
    },

    reducers:{
        toggleSideBar:(state)=>{
            state.sidebar = !state.sidebar;
        },
        setTab:(state, action)=>{
            state.tab = action.payload;
        },
    },
});

export const {toggleSideBar, setTab} = navSlice.actions;

export default navSlice.reducer;
