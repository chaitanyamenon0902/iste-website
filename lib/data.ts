import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getProjects() {
  return await prisma.project.findMany();
}
