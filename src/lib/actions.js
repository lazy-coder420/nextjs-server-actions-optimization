import { postTask } from "./task";
export const createATask = async (formData)=>{
    "use server"
const newTask = Object.fromEntries(formData.entries());
console.log(newTask);

const res =await postTask(newTask);
return res;
}