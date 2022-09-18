import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './users';

const rootReducer = combineReducers({
    users : userSlice.reducer
});

export default rootReducer;