import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    // useCallback은 함수를 memoization하고 dependency array에 조건을 줌
    // dependency array 안에 적어둔 값이 바뀌지 않으면, 이전 메모리에 memoization한 함수를 계속 사용함
    // 하지만 useCallback을 사용하여, 렌더링 될 때마다 함수나 변수가 초기화 되는 것을 방지함

    // state인 value를 바꿔주는 함수
    // value가 바뀌면 state가 바뀌기 때문에 다시 렌더링 해줌

    // event를 prop으로 받음
    // useCallback을 사용하고, dependency array를 빈 값으로 받아서
    // 첫 렌더링 시에만 함수가 초기화되고
    // 다시 렌더링 될 시, onChange는 새로 초기화되지 않음
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    // 제출 이벤트 -> onInsert(value) -> state 변경 -> 다시 렌더링
    // setValue('') -> state 변경 -> 다시 렌더링
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');   // value 값 초기화 -> state 변경 - > 렌더링

            // submit 이벤트는 브라우저에서 새로고침을 발생시킴
            // 이를 방지하기 위하여 이 함수를 호출함
            e.preventDefault();
        },
        [onInsert, value],      // onInsert와 value가 변했을 경우만 할당
    );

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>    
            </button>           
        </form>
    );
};

export default TodoInsert;