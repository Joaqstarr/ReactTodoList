import React from "react";


export function InputField({onChange, onEnter}){
    const handleEnter = (ev)=>{
        if(ev.key === 'Enter'){
            onEnter(ev);
            ev.target.value = "";
        }
    }
    return(
        <div className="w-full py-4 px-5 border-b border-slate-100">
            <input className="quicksand" type="text" placeholder="What to do?" onKeyDown={handleEnter} onChange={onChange}/>
        </div>
    );
}

