import React from 'react';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    
    return (
        <div className="TodoList">
            {todos.map(todo => (
            <></>    
            ))
            }
        </div>
    );
};

export default TodoList;