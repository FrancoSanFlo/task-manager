import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// DELETE /api/tasks/deleteAllTasKS -> delete all tasks
export default async function handler(req, res) {
  if (req.method === "DELETE" && req.url === "/api/tasks/deleteAllTasks") {
    return deleteAllTasks();
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function deleteAllTasks() {
  try {
    await prisma.task.deleteMany();
    res.json({ message: "All tasks deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting tasks" });
  }
}
