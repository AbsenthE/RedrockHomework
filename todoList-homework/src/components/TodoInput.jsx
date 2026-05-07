import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoState';

function TodoInput() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useRecoilState(todoListState);

    const addTodo = () => {
        if (inputValue.trim() === '') return; // 空的不让加
        const newTodo = {
            id: Date.now(), // 用时间戳当临时唯一 id
            text: inputValue,
            completed: false,
        };
        setTodos([...todos, newTodo]); // 把新对象塞进数组
        setInputValue(''); // 清空输入框
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入新日程"
            />
            <button onClick={addTodo}>添加</button>
        </div>
    );
}

export default TodoInput;