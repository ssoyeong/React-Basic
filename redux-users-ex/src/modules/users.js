import { createSlice } from '@reduxjs/toolkit';

const ADD_USER = 'users/ADD_USER';
const DEL_USER = 'users/DEL_USER';
const TOGGLE_USER = 'users/TOGGLE_USER';

let nextId = 1;

export const addUser = text => (
    {
        type: ADD_USER,
        user: {
            id: nextId++,
            text: text,
            done: false,
        }
    }
);

export const toggleUser = id => (
    {
        type: TOGGLE_USER,
        id: id,
    }
);

export const delUser = id => (
    {
        type: DEL_USER,
        id: id,
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers:{
        ADD_USER: (state, action) => {
            if(state.find((user) => user.text === action.user.text)) {
                alert(action.user.text + '와 같은 이름이 존재합니다.');
                return state;
            }
            console.log(action.user);
            return state.concat(action.user);
        },
        DEL_USER: (state, action) => {
            return state.filter(user => user.id !== action.id);
        },
        TOGGLE_USER: (state, action) => {
            return state.map(user => user.id === action.id ? {...user, done: !user.done} : user);
        }
    }
});

export default userSlice;