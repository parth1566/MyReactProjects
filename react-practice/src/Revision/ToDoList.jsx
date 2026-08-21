import React, { useState } from 'react'
import '../App.css'  
import { useMemo } from 'react';

const ToDoList = () => {
    const[toDos, setToDos] = useState([]);
    const[input, setInput] = useState("");
    const[filter, setFilter] = useState("all");

    function handleAdd(e) {
       if(input === ""){
        alert("Please add some task!!");
        return;
       } else {
           const toDoWork = {id: Date.now(), text: input, completed:false};
           setToDos([...toDos,toDoWork]);
           setInput("");
       }
       
    }

    function handleDelete(id) {
        setToDos(toDos.filter(toDo => toDo.id !== id));
    }

    function handleToggle(id) {
        setToDos(toDos.map(toDo => toDo.id === id ?
            {...toDo, completed: !toDo.completed}
            :toDo
        ))
    }

  const visibleToDos = useMemo(() => {
    if (filter === "active")
         return toDos.filter(toDo => !toDo.completed);
    else if (filter === "completed") return toDos.filter(toDo => toDo.completed);
    else return toDos;
}, [toDos, filter]);

  return (
    <>
    <button onClick={() => setFilter("all")}>All</button>
    <button onClick={() => setFilter("active")}>Active</button>
    <button onClick={() => setFilter("completed")}>Completed</button>
    <div>
      <h1>To-do-list of Parth</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
    </div>

    <div>
       {toDos.length === 0 ? (
        <p>No ToDo's yet !</p>
       ) : (
       visibleToDos.map(toDo => (
       <div className={toDo.completed ? "toDo-row done" : "toDo-row"} key={toDo.id} >
        {toDo.text}
        <br />
       <button onClick={() => handleDelete(toDo.id)} >Delete</button>
       <button  onClick={() => handleToggle(toDo.id)}>{toDo.completed ? "Undo" : "Done"}</button>
       
       </div>
        )
        )
    )
    } 
    </div>

    </> 
  )
}

export default ToDoList
