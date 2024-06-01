import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// POST /api/tasks/create -> create a task
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, description } = req.body;
    return createTask(title, description);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function createTask(title, description) {
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    res.status(200).json({ message: "Task created", task });
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
}
