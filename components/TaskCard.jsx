import Button from "./Button";
import CheckIcon from "./CheckIcon";
import DeleteIcon from "./DeleteIcon";
import UndoIcon from "./UndoIcon";
import Task from "@/models/task";

const TaskCard = ({ taskData, handleDelete, handleComplete }) => {
  const task = new Task(
    taskData.id,
    taskData.title,
    taskData.description,
    taskData.done,
    taskData.createdAt,
    taskData.updatedAt
  );

  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{task.title}</h1>
          <div className="flex gap-x-3 items-center">
            {task.done ? (
              <>
                <span className="text-green-500 font-semibold p-1 rounded-md text-sm sm:text-md">
                  Completed
                </span>
                <Button
                  className="text-blue-950 p-2 rounded-full transition ease-in-out duration-300 hover:bg-blue-950 hover:text-white text-sm sm:text-md"
                  onButtonClick={() => handleComplete(task)}
                >
                  <UndoIcon />
                </Button>
              </>
            ) : (
              <>
                <span className="text-red-500 font-semibold text-sm sm:text-md">
                  Not Completed
                </span>
                <Button
                  className="text-blue-950 p-2 rounded-full transition ease-in-out duration-300 hover:bg-blue-950 hover:text-white text-sm sm:text-md"
                  onButtonClick={() => handleComplete(task)}
                >
                  <CheckIcon />
                </Button>
              </>
            )}
            <Button
              className="text-blue-950 px-2 py-1  rounded-md transition ease-in-out duration-300 hover:bg-blue-950 hover:text-white text-sm sm:text-md"
              onButtonClick={() => handleDelete(task.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
        <p className="text-sm mt-2 text-start">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
