const TaskCard = ({ task, handleDelete, handleComplete}) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{task.title}</h1>
          <div className="flex gap-x-2 items-center">
            {task.done ? (
              <span className="text-green-50 bg-green-500 p-1 rounded-md text-sm sm:text-md">Completed</span>
            ) : (
              <span className="text-red-500">Not Completed</span>
            )}
            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm sm:text-md">
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm mt-2 text-start">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
