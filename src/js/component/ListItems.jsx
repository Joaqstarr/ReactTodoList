import React from "react";

export function ListItems({TodosArray, RemoveCallback}){
    return (
        <div className="flex flex-col">
            {TodosArray.map((task, key) => (
                <ListItem key={key} index={key} task={task.label} RemoveCallback={RemoveCallback}/>
            ))}
        </div>
    )
}

function ListItem({task, index, RemoveCallback}){

    const HandleDelete = (ev)=> {
        RemoveCallback(index)
    }
    return(
        <div className="w-full py-4 px-5 bkrder-b border-slate-100 flex place-content-between">
            <p className="quicksand text-slate-500 font-normal">{task}</p>

            <i className="fa-solid fa-x text-slate-400 cursor-pointer" onClick={HandleDelete}></i>
        </div>
    )
}