async function readUser(url){
    return fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
         }
    });
}

export async function getTodos(user, setIdCallback){
    const url = 'https://playground.4geeks.com/todo/users/' + user;

    let response = await readUser(url);
    console.log(response);

    if(response.ok){
        if(response.status == 200){
            const data = await response.json();
            console.log(data);
            setIdCallback(data.id);
            
            return data.todos;
        }

    }else{
        
        if(response.status == 404){
            let data = await CreateUser(user);
            setIdCallback(data.id);
            return data.todos;
        }
            
    }
    console.log('error: ', response.status, response.statusText);
    return {error: {status: response.status, statusText: response.statusText}};
}
async function CreateUser(user){
    const url = 'https://playground.4geeks.com/todo/users/' + user;

    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
         }
    });

    if(response.ok){
        if(response.status == 201){
            const userData = await readUser(url);
            const data = await userData.json();
            return data;
        }
    }

    console.log('error creating user: ', response.status, response.statusText);
    console.log(response);
    console.log("User: "+user);
    return {error: {status: response.status, statusText: response.statusText}};
}


export async function FinishTask(task){
    const url = 'https://playground.4geeks.com/todo/todos/' + task.id;
    const updated =
    {
        "label": task.label,
        "is_done": task.is_done
    };
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(updated),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok){
        if(response.status == 201){
            const data = await response.json();
            return data;
        }
    }

    return "error"

}
export async function AddTodo(user, task){
    const url = 'https://playground.4geeks.com/todo/todos/' + user;
    const todo = {label: task, is_done: false};
    console.log("Creating todo: " + todo)
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(todo),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        if(response.status == 201){
            const data = await response.json();
            return data;
        }
    }
    return "error"

}

export async function DeleteTask(taskId){
    const url = 'https://playground.4geeks.com/todo/todos/' + taskId;

    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })

}