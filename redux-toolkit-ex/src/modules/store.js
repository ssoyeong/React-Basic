import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';

const store = configureStore({
    reducer: userReducer,       // reducers 등록
});

export default store;