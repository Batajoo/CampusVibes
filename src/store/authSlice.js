import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    authData: null,
    isAuthorized: false,
};

const authSlice = createSlice({
    name: 'autho',
    initialState,
    reducers: {
        login(state, action){
            state.userId = action.payload.userId;
            state.authData = action.payload.authData;
            state.isAuthorized = true;
        },
        logout(state){
            state.authData = null;
            state.isAuthorized = false;
            state.userId = null;
        }
    }
});

export const {login, logout} = authSlice.reducer;
export default authSlice.reducer;