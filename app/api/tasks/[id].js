import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// DELETE /api/tasks/[id] -> delete a task
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    return deleteTask(id);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function deleteTask(id) {
  try {
    await prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
}
