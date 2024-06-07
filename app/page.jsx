"use client";

import { useState } from "react";
import SideMenu from "@/components/SideMenu";
import Dashboard from "@/components/Dashboard";
import TaskModal from "@/components/TaskModal";
import { useTasks } from "@/hooks/useTasks";

const Home = () => {
  const {
    data: tasks,
    isLoading: isFetching,
    deleteTask,
    completeTask,
    createTask,
  } = useTasks("/api/tasks");

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col pt-2 sm:flex-row h-full">
        <button
          className=" bg-blue-950 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Nueva tarea
        </button>
        <SideMenu tasks={tasks} />
        {isModalOpen && (
          <TaskModal
            onClose={() => setIsModalOpen(false)}
            createTask={createTask}
          />
        )}
        <Dashboard
          tasks={tasks}
          isFetching={isFetching}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </>
  );
};

export default Home;
