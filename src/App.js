import React, {useState, useEffect} from 'react';
// Import Component
import Action from './components/Action';
import List from './components/List';

// Import Style
import './style.scss';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect( () => {
    getLocalTodos();
  },[]);

  //Use Effect
  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  },[todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="todo">
      <Action 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus} 
        
      />
      <List 
        filteredTodos={filteredTodos}
        setTodos={setTodos}  
        todos={todos}
      />
    </div>
  );
}

export default App;
