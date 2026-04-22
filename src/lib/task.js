import task from '../data/task.json';
export const getTask = async ()=>{
   return task;
}



export const postTask = async (newTask)=>{
    newTask.id = task.task.length + 1;
    task.task.push(newTask);
    return{success: true, message: "Task created successfully"};
}