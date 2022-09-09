import { PrismaClient } from "@prisma/client";
import { createError, sendError} from "h3";

const prisma = new PrismaClient();
export default defineEventHandler(async(event) => {
  const { method } = event.req;
  if (method === "GET") {
    const res = await prisma.todolist.findMany()
    return res
  }
  if (method === "POST") {
    const body = await useBody(event);
    if (!body.item) {
      const notFoundError = createError({
        statusCode: 404,
        statusMessage: "No correct item provided",
        data: {}
      })
      sendError(event, notFoundError)
    };

    const res = await prisma.todolist.create({
      data: {
        item: body.item,
        completed: 0
      }
    })

    return res
  }
});