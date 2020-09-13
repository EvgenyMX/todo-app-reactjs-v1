import React from 'react';

const Action = ( {setInputText, setTodos, inputText, todos, setStatus} ) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = () => {

        if (inputText === "") {
            return false;
        }
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 1000)
            }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    
    return(
        <div className="todo-action">
            <div className="todo-append">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-append__text"/>
                <button onClick={submitTodoHandler} className="todo-append__add"><i className="fas fa-plus-square"></i></button>

            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>

    )
}


export default Action;