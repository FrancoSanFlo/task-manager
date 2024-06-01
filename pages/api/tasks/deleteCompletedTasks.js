import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// DELETE /api/tasks/deleteCompletedTasks -> delete all completed tasks
export default async function handler(req, res) {
  if (
    req.method === "DELETE" &&
    req.url === "/api/tasks/deleteCompletedTasks"
  ) {
    return deleteCompletedTasks();
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function deleteCompletedTasks() {
  try {
    await prisma.task.deleteMany({
      where: {
        completed: true,
      },
    });
    res.json({ message: "Completed tasks deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting completed tasks" });
  }
}
