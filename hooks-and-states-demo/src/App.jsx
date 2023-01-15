import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState();

  function addNewTodo(e) {
    e.preventDefault()
    setTodoList([...todoList,{text: newTodo, id: todoList.length}])
  }

  return (
    <form onSubmit={(e)=>{addNewTodo(e)}} className="TodoForm">
      <TodoInput addNewTodo={setNewTodo}/>
      <TodoListComponent ListOfItems={todoList}/>
      <button type='submit' className='AddNewTodo'>Add new Todo!</button>
    </form>
  );
}

function TodoInput(props){
  return(
    <input className='TodoInput' onChange={(e)=>{props.addNewTodo(e.target.value)}}></input>
  );
}

function TodoListComponent({ListOfItems}) {
  return (
    <ul className='TodoList'>
        {ListOfItems.length>0 ? ListOfItems.map((Item)=>{
        return <li key={Item.id} className='TodoListItem'>{Item.text}</li>
        })
          : <li className='TodoListItem'>Your list is empty!</li>
        }
    </ul>
  );
}

export default App;
