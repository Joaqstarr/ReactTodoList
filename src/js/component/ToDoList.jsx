import React from "react";

"use client"
import { Remaining } from "./Remaining.jsx";
import { ListItems } from "./ListItems.jsx";
import { InputField } from "./InputField.jsx";
import { useState , useEffect} from "react";
import {getTodos} from "./ApiAccess.jsx";
import {AddTodo} from "./ApiAccess.jsx";
import { FinishTask } from "./ApiAccess.jsx";
import { DeleteTask } from "./ApiAccess.jsx";

const username = "Joaq2"
export function ToDoList(){
    const [task, setTask] = useState("");
    const [Todos, setTodos] = useState([]);
    const [Id, setId] = useState(-1);

    const loadData = async () => {
        const data = await getTodos(username, HandleId);
        setTodos(data);
    };
    useEffect(() => {
        loadData();
      }, []);
    
      const HandleId = (newId)=>{
        setId(newId);
      }

    const HandleFinish = (index) => {
        let newValue = !Todos.at(index).is_done;

        setTodos(SetDoneAt(Todos, index, newValue));
        FinishTask(Todos.at(index));

    }

    const HandleEnter = async (ev) =>{
        if(ev.key === 'Enter' && task.trim() != ""){
            const newTodo = await AddTodo(username, task.trim());
            
            setTodos([newTodo,...Todos])

            setTask("");
        }
    }

    const HandleChange = (ev) => {
        setTask(ev.target.value);
    }
    const HandleRemove = (index)=>{
        //UpdateTodos(Id, Todos);
        const TodoToRemove = Todos.at(index)
        setTodos(RemoveTaskAt(Todos, index));
        DeleteTask(TodoToRemove.id);
        
    }
    return(
    <div className="w-1/2  shadow-xl">
        <InputField onChange={HandleChange} onEnter={HandleEnter}/>
        <ListItems TodosArray={Todos} RemoveCallback={HandleRemove} FinishCallback={HandleFinish}/>
        <Remaining amount={Todos.length} />
        <div className="border-slate-300 border-1 shadow-xl -z-1 h-5 relative mx-1 -bottom-1"><div className="border-slate-300 border-1 shadow-xl -z-1 h-5 relative mx-1 -bottom-1"></div></div>
    </div>
    )
}


function SetDoneAt(array, index, value){
    const newArray = [...array];
    newArray.at(index).is_done = value;

    return newArray;
}

function RemoveTaskAt(array, index){
    return array.splice(0, index).concat(array.splice(index+1));
}
