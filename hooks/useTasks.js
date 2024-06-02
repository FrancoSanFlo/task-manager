import { useState, useEffect } from "react";

export const useTasks = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();

      if (res.ok) {
        setData(json);
      } else {
        throw json;
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, { method: "DELETE" });

      if (res.ok) {
        setData(data.filter((task) => task.id !== id));
      } else {
        throw new Error("Error deleting task");
      }
    } catch (error) {
      setError(error);
    }
  };

  const completeTask = async (task) => {
    try {
      const res = await fetch("/api/tasks/completeTask", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      if (res.ok) {
        const json = await res.json();
        setData(data.map((t) => (t.id === task.id ? json : t)));
      } else {
        throw new Error("Error updating task");
      }
    } catch (error) {
      setError(error);
    }
  };

  return { data, isLoading, error, deleteTask, completeTask };
};
