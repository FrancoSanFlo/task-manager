import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// delete task by id
export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      await prisma.task.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting task" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
