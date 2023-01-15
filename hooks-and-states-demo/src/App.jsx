import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [listCounter, setListCounter] = useState(todoList.length);

  useEffect(() => {
    console.log(`The lenght of your TodoList is: ${todoList.length}`);
    setListCounter(todoList.length)
  },[todoList]);

  function addNewTodo(e) {
    e.preventDefault()
    setTodoList([...todoList,{text: newTodo, id: todoList.length}])
  }

  return (
    <form onSubmit={(e)=>{addNewTodo(e)}} className="TodoForm">
      {listCounter>0 ? <div className='TodoCounter'>{listCounter}</div> : <></>}
      
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
