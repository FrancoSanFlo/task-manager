import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// POST /api/tasks/complete -> complete a task
export async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;
    return completeTask(id);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function completeTask(id) {
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
    res.status(500).json({ error: "Error completing task" });
  }
}
