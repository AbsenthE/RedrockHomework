import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoState';

function TodoItem({ todo }) {
    const [todos, setTodos] = useRecoilState(todoListState);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    // 删除：过滤掉自己
    const deleteTodo = () => {
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    // 切换完成状态
    const toggleComplete = () => {
        setTodos(todos.map(t =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
        ));
    };

    // 保存编辑
    const saveEdit = () => {
        setTodos(todos.map(t =>
            t.id === todo.id ? { ...t, text: editText } : t
        ));
        setIsEditing(false);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            {isEditing ? (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={saveEdit}>保存</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)}>编辑</button>
                </>
            )}
            <button onClick={deleteTodo}>删除</button>
        </div>
    );
}

export default TodoItem;