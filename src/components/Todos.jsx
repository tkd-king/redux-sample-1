import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos); 
    const dispatch = useDispatch(); 

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => ( 
                <ul className='list-none' key={todo.id}> 
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                        <div className="text-white">{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                fill='none'
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className='w-6 h-6'
                                viewBox="0 0 384 512"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 
                                    210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 
                                    41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.
                                    6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default Todos;
