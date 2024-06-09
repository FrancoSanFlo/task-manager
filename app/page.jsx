"use client";

import { useState } from "react";
import SideMenu from "@/components/SideMenu";
import Dashboard from "@/components/Dashboard";
import TaskModal from "@/components/TaskModal";
import SearchBar from "@/components/SearchBar";
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
  const [searchValue, setSearchValue] = useState("");

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      task.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <div className="pt-2 flex flex-col w-full h-full">
        <div className="w-full flex justify-center gap-x-8">
          <button
            className=" bg-blue-950 text-white py-1 rounded w-32 hover:bg-blue-900"
            onClick={() => setIsModalOpen(true)}
          >
            Nueva tarea
          </button>
          <SearchBar handleChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="w-full flex flex-col pt-2 sm:flex-row h-[80%]">
          <SideMenu tasks={tasks} />
          {isModalOpen && (
            <TaskModal
              onClose={() => setIsModalOpen(false)}
              createTask={createTask}
            />
          )}
          <Dashboard
            tasks={filteredTasks}
            isFetching={isFetching}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
