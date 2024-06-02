"use client";

import { useTasks } from "@/hooks/useTasks";
import TaskCard from "./TaskCard"
import Loader from "./Loader";

const Dashboard = () => {
  const {data: tasks, isLoading: isFetching, deleteTask, completeTask} = useTasks('/api/tasks');

  return (
    <div className="w-full px-2 md:w-[70%] text-center flex flex-col gap-3">
      {isFetching && <Loader />}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} handleDelete={deleteTask} handleComplete={completeTask}/>
      ))}
    </div>
  )
}

export default Dashboard