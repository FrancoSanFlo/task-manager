import TaskCard from "./TaskCard";
import Loader from "./Loader";

const Dashboard = ({ tasks = [], isFetching, deleteTask, completeTask }) => {
  if (isFetching && tasks.length === 0) {
    return (
      <div className="w-full px-2 md:w-[70%] md:min-h-[90%] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="w-full px-2 md:w-[70%] md:min-h-[90%] flex items-center justify-center">
        <p className="text-center text-gray-600">
          No se encontraron resultados
        </p>
      </div>
    );
  }

  return (
    <div className="w-full my-4 py-1 px-2 md:w-[70%] flex-grow overflow-auto text-center flex flex-col gap-3">
      {isFetching && <Loader />}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskData={task}
          handleDelete={deleteTask}
          handleComplete={completeTask}
        />
      ))}
    </div>
  );
};

export default Dashboard;
