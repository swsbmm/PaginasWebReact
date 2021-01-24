import React from 'react';
import Todo from './Todo';





const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {


    return (
        <div>
            <h1>Lista de tareas.</h1>
            {
                todos.length === 0 ?
                    (
                        <div className='alert alert-primary'>
                            <p>No hay tareas!</p>
                        </div>
                    )
                    :
                    (
                        todos.map(elemento => (
                            <Todo

                                todo={elemento}
                                todoDelete={todoDelete}
                                todoToogleCompleted={todoToogleCompleted}
                                setTodoEdit={setTodoEdit}
                                key={elemento.id}

                            />
                        ))
                    )

            }




        </div>
    );
}

export default TodoList;