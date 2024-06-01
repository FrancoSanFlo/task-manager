import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

// GET /api/tasks -> get all tasks
export default async function handler(req, res) {
  if (req.method === "GET") {
    return getTasks(res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function getTasks(res) {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
}
