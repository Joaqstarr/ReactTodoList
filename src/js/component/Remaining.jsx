import React from "react"

export function Remaining({amount}){
    return(
        <div className="p-4">
            <p className="quicksand text-slate-400">{amount} Items Left</p>
        </div>
    )
}