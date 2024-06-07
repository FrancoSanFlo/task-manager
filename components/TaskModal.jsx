import { useState, useRef } from "react";
import Task from "@/models/task";

const TaskModal = ({ onClose, createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const modalRef = useRef();

  const handleCreate = () => {
    if (!title || !description) {
      setError("Por favor, llena todos los campos");
      return;
    }
    setError(null);
    const task = new Task(undefined, title, description, false);
    console.log("Task created:", task);
    console.log("Task created:", { title, description });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClickOutside}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block bg-white rounded-lg overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          ref={modalRef}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
            <div className="">
              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative mb-4 sm:px-4 sm:py-3">
                    {error}
                  </div>
                )}
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 text-center"
                  id="modal-title"
                >
                  Nueva tarea
                </h3>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-gray-700">
                      Título
                    </label>
                    <input
                      id="title"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Escribe el título de la tarea"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="description" className="text-gray-700">
                      Descripción
                    </label>
                    <textarea
                      id="description"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Escribe la descripción de la tarea"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    className="bg-blue-950 hover:bg-blue-900 text-white py-2 px-4 rounded"
                    onClick={handleCreate}
                  >
                    Crear
                  </button>
                  <button
                    className="bg-white hover:bg-gray-200 text-blue-950 py-2 px-4 rounded border border-blue-950"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
