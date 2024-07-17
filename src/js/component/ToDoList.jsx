import React from "react";

"use client"
import { Remaining } from "./Remaining.jsx";
import { ListItems } from "./ListItems.jsx";
import { InputField } from "./InputField.jsx";
import { useState , useEffect} from "react";


export function ToDoList(){
    const [task, setTask] = useState("");
    const [Todos, setTodos] = useState([]);

    const loadData = async () => {
        //const data = await getTodos(user);
        //setTodos(data);
    };
    useEffect(() => {
        loadData();
      }, []);
    const HandleEnter = (ev) =>{
        if(ev.key === 'Enter' && task.trim() != ""){
            const newTodo = { label: task.trim(), is_done: false };
            setTodos([newTodo,...Todos])
            setTask("");
        }
    }

    const HandleChange = (ev) => {
        setTask(ev.target.value);
    }
    const HandleRemove = (index)=>{
        setTodos(RemoveAt(Todos, index));
    }
    return(
    <div className="w-1/2  shadow-xl">
        <InputField onChange={HandleChange} onEnter={HandleEnter}/>
        <ListItems TodosArray={Todos} RemoveCallback={HandleRemove} />
        <Remaining amount={Todos.length} />
        <div className="border-slate-300 border-1 shadow-xl -z-1 h-5 relative mx-1 -bottom-1"><div className="border-slate-300 border-1 shadow-xl -z-1 h-5 relative mx-1 -bottom-1"></div></div>
    </div>
    )
}


function GetToDos(user){
    return ["take out trash", "dog"];
}

function RemoveAt(array, index){
    return array.slice(0, index).concat(array.slice(index+1));
}