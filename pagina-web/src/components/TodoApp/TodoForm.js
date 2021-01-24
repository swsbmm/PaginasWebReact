import React, { useState, useEffect } from 'react';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ agregarTarea, todoEdit, editarTarea, setTodoEdit }) => {



    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [victoria, setVictoria] = useState(null)

    useEffect(() => {
        if (todoEdit)
            setFormValues(todoEdit)
        else
            setFormValues(initialFormValues)
    }, [todoEdit]);

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changedFormValues);
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (title.trim() === '') {

            setError('Debes indicar un titulo')
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        } else if (description.trim() === '') {
            setError('Debes indicar una descripcion');
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }

        if (todoEdit) {
            //acutalizando
            editarTarea(formValues);
            setVictoria('Tarea editada con exito')
        } else {
            agregarTarea(formValues);
            setFormValues(initialFormValues);
            setVictoria('Tarea agregada con exito')
        }



        setTimeout(() => {
            setVictoria(null)
        }, 1200);
        setError(null);

    }

    return (
        <div>
            <h1>{todoEdit ? 'Editar tarea.' : 'Nueva tarea.'}</h1>
            {
                todoEdit && (
                    <button
                        onClick={() => setTodoEdit(null)}
                        className='btn  btn-sm btn-warning btn-block  mb-2'
                    >Cancelar Edicion
                    </button>
                )
            }

            <form onSubmit={enviarFormulario}>
                <input
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='Descripcion'
                    className='form-control mt-2'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                />
                <button
                    className='bnt btn-primary btn-block mt-2'
                >{todoEdit ? 'Actualizar tarea' : 'Agregar'}
                </button>

            </form>
            {
                error && (
                    <div className='alert alert-danger mt-2'>
                        <p>{error}</p>
                    </div>
                )
            }
            {
                victoria && (
                    <div className='alert alert-success mt-2'>
                        <p>{victoria}</p>
                    </div>
                )
            }


        </div>

    );
}

export default TodoForm;