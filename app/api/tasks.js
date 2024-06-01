import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const completeTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: {
        done: true,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.deleteMany({});
    res.json({ message: "All tasks deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCompletedTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.deleteMany({
      where: {
        done: true,
      },
    });
    res.json({ message: "All solved tasks deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Route mapping
const routeHandlers = {
  POST: {
    "/api/createTask": createTask,
  },
  PUT: {
    "/api/completeTask/:id": completeTask,
  },
  DELETE: {
    "/api/deleteTask/:id": deleteTask,
    "/api/deleteTasks": deleteTasks,
    "/api/deleteCompletedTasks": deleteCompletedTasks,
  },
};

// Principal handler
export default async function handler(req, res) {
  const { method, url } = req;
  const handlerFunction = routeHandlers[method][url];

  if (handlerFunction) {
    return handlerFunction(req, res);
  } else {
    res.status(404).json({ error: "Route not found" });
  }
}
