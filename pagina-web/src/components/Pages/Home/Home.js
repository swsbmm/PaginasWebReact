//porfavor la estructura
import React, { useState, useEffect } from 'react';
import TodoForm from '../../TodoApp/TodoForm';
import TodoList from '../../TodoApp/TodoList';


const initialTodos = [
    {
        id: 1,
        title: 'todo#1',
        description: 'Descripcion del todo#1',
        completed: false
    },

    {
        id: 2,
        title: 'todo#2',
        description: 'Descripcion del todo#2',
        completed: true
    }
    
    
];

const localTodos = JSON.parse(localStorage.getItem('todos'));
const Home = () => {

    const [todos, setTodos] = useState(localTodos || initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    const todoDelete = (todoId) => {
        if (todoEdit != null && todoId === todoEdit.id) {
            setTodoEdit(null)
        }
        const changedTodos = todos.filter(elemento => elemento.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(elemento => (
            elemento.id === todoId ? { ...elemento, completed: !elemento.completed } : elemento
        )
        )
        setTodos(changedTodos);
    }

    const agregarTarea = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        const changedTodos = [
            newTodo,
            ...todos

        ]
        setTodos(changedTodos);
    }

    const editarTarea = (todoEdit) => {
        const changedTodos = todos.map(elemento => (
            elemento.id === todoEdit.id
                ? todoEdit
                : elemento
        ))
        setTodos(changedTodos);
    }

    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className='col-5'>
                    <TodoForm
                        agregarTarea={agregarTarea}
                        editarTarea={editarTarea}
                        setTodoEdit={setTodoEdit}
                        todoEdit={todoEdit}
                    />
                </div>
            </div>
        </div>
    );

}
export default Home;