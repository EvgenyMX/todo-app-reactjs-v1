import React from 'react';

const Todo = ( {text, todo, todos, setTodos} ) => {
    //Events 

    const completedHandler = () => {
        setTodos( todos.map( (item) => {
                if( item.id === todo.id ) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            } )
        )
    }

    const deleteHandler = () => {
        setTodos( todos.filter( (el) => 
            el.id !== todo.id
        ) )
    }
    return(
        <div className="todo-item">
            <div className={`todo-item__text ${todo.completed ? "todo-item__completed" : ""}`}>{text}</div>
            <button onClick={completedHandler} className="todo-item__btn todo-item__btn-check">
                <i className="fas fa-check-square"></i>
            </button>
            <button onClick={deleteHandler} className="todo-item__btn todo-item__btn-trash">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}


export default Todo;