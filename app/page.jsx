"use client";

import SideMenu from "@/components/SideMenu";
import Dashboard from "@/components/Dashboard";
import { useTasks } from "@/hooks/useTasks";

const Home = () => {
  const {
    data: tasks,
    isLoading: isFetching,
    deleteTask,
    completeTask,
  } = useTasks("/api/tasks");

  return (
    <>
      <div className="w-full flex flex-col pt-2 sm:flex-row h-full">
        <SideMenu tasks={tasks} />
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
