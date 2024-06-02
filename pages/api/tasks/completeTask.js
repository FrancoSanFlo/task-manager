import prisma from "@/lib/prisma";

// POST /api/tasks/completeTask -> complete a task
export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { task } = req.body;
    return completeTask(task, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function completeTask(taskSelected, res) {
  try {
    const task = await prisma.task.update({
      where: {
        id: parseInt(taskSelected.id),
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
