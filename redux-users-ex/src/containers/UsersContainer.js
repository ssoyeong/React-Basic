import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, toggleUser, delUser } from '../modules/users';
import Users from '../components/Users';

function UsersContainer() {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addUser(text));
    const onToggle = useCallback(id => dispatch(toggleUser(id))
    , [dispatch]);
    const onRemove = id => dispatch(delUser(id));

    return <Users users={users}
                onCreate={onCreate}
                onToggle={onToggle}
                onRemove={onRemove} />;
}

export default UsersContainer;