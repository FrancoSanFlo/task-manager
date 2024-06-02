"use client";

import { useState, useEffect } from "react"
import TaskCard from "./TaskCard"
import Loader from "./Loader";

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsFetching(true);
      const res = await fetch('/api/tasks');
      const data = await res.json();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="w-full px-2 md:w-[70%] text-center flex flex-col gap-3">
      {isFetching && <Loader />}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Dashboard