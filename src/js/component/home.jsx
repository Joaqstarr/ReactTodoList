import React from "react";

import { ToDoList } from "./ToDoList.jsx";

//create your first component
const Home = () => {
	return (
		<div className="w-full flex flex-col items-center space-y-5">
			<h1 className="text-8xl font-extralight m-auto text-center quicksand text-slate-400">todos</h1>
			<ToDoList/>
		</div>
	);
};


export default Home;
