import React, { useState } from 'react';

// 컴포넌트 최적화를 위해 React.memo 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle}) {
    return (
        <li
            style={{ textDecoration: todo.done ? 'line-through' : 'none'}}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

// 컴포넌트 최적화를 위해 React.memo 사용
const TodoList = React.memo(function TodoList({ todos, onToggle}) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

function Todos({ todos, onCreate, onToggle}) {
    // redux를 사용한다고 해서 모든 상태를 redux에서 관리해야 하는 것은 아님
    const [text, setText] = useState("");
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();     // submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText('');        // input 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="할 일을 입력하세용"
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;