import { PrismaClient } from "@prisma/client";
import { createError, sendError} from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
  const { method } = event.req;
  const {id} = event.context.params;

  if (method === "PUT") {

    // if (!res[0]) {
    //   const notFoundError = createError({
    //     statusCode: 404,
    //     statusMessage: "Todo Not Found",
    //     data: {}
    //   })
    //   sendError(event, notFoundError)
    // };
   await prisma.todolist.update({
      where: {
        id: parseInt(id, 10)
      },
      data: { completed: 1}
    })

    return {messsage: 'To do updated correctly'};
  }
  if (method === "DELETE") {
   await prisma.todolist.delete({
      where: {
        id: parseInt(id, 10)
      }
    })

    return { message: 'Item deleted successfully'}
  }
});