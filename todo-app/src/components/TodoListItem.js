import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss';

// todolist로 받은 props를 이용하여 element 생성 및 함수 이용
const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    console.log(todo);
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
