import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoState';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useRecoilState(todoListState);

    // 全选
    const selectAll = () => {
        setTodos(todos.map(t => ({ ...t, completed: true })));
    };

    // 全不选
    const deselectAll = () => {
        setTodos(todos.map(t => ({ ...t, completed: false })));
    };

    // 反选
    const invertSelect = () => {
        setTodos(todos.map(t => ({ ...t, completed: !t.completed })));
    };

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
            <div>
                <button onClick={selectAll}>全选</button>
                <button onClick={deselectAll}>全不选</button>
                <button onClick={invertSelect}>反选</button>
            </div>
        </div>
    );
}

export default TodoList;