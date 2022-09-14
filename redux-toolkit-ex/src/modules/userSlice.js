// action과 reducer의 로직을 모아 둔 파일

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: 'Gachon',
    isClick: false
}

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        inputUser: (state, action) => {
            state.user = action.payload;
            console.log(state.user);
        },
        onClick: (state) => {
            state.isClick = true;
        },
        resetUser: (state) => {
            state.isClick = false;
        }
    }
});

export const {inputUser, onClick, resetUser} = userSlice.actions;

export default userSlice.reducer;