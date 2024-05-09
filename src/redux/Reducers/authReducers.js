import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        isLoggedIn: false,
        authData: null,
        location:[],
    },
    reducers: {
        setAuthdata(state, action) {
            state.isLoggedIn = true;
            state.authData = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.authData = null;
        },
        loc(state,action){
            state.location=action.payload
        }
        // authToken(state){
        //     state.isLoggedIn=true;
        //     state.authData=action.payload
        // }
    },
});



export const { setAuthdata, logout,loc } = authSlice.actions;


export default authSlice.reducer;
