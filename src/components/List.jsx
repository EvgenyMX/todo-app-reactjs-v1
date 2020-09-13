import React from 'react';

// Import Component
import Todo from './Todo';
 
const List = ( {todos, setTodos, filteredTodos} ) => {
    return(
        <div className="todo-list">
            {
                filteredTodos.map( (todo) => 
                    <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        setTodos={setTodos}  
                        todo={todo}  
                        todos={todos} 
                    /> 
                )
            }
        </div>
    )
}

export default List;