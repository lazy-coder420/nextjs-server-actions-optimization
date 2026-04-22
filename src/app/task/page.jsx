import { AddTask } from "@/componets/AddTask";
import TaskCard from "@/componets/TaskCard";
import { getTask } from "@/lib/task";
import { createATask } from '../../lib/actions';

const TaskPage = async () => {
  const data = await getTask();
  

  return (
    <div >
      <h1>Total Task: {data.task.length}</h1>
      <AddTask createATask ={createATask}></AddTask>
 <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

     {data.task.map(t => (
        <TaskCard key={t.id} task={t} />
      ))} 
 </div>
    </div>
  );
};
export default TaskPage;