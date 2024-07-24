import React from "react";

export function ListItems({TodosArray, RemoveCallback, FinishCallback}){

    return (
        <div className="flex flex-col">
            {TodosArray.map((task, key) => (
                <ListItem key={key} index={key} task={task} RemoveCallback={RemoveCallback} FinishCallback={FinishCallback}/>
            ))}
        </div>
    )
}

function ListItem({task, index, RemoveCallback, FinishCallback}){

    const HandleDelete = (ev)=> {
        RemoveCallback(index);
    }
    const HandleFinish = (ev)=> {
        FinishCallback(index);
    }

    return(
        <div className="w-full py-4 px-5 bkrder-b border-slate-100 flex place-content-between">
            <p className={"quicksand text-slate-500 font-normal cursor-pointer" + (task.is_done? " line-through" : "")} onClick={HandleFinish}>{task.label}</p>

            <i className="fa-solid fa-x text-slate-400 cursor-pointer" onClick={HandleDelete}></i>
        </div>
    )
}