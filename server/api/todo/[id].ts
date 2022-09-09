import db from '../../db';
import { createError, sendError} from "h3";

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
    const res = await db.query('UPDATE todolist SET completed = true WHERE id = ?', [id]);
    console.log(res)
    return {messsage: 'To do updated correctly'};
  }
  if (method === "DELETE") {
    const res = await db.query('DELETE FROM todolist WHERE id = ?', [id])
    console.log(res)
    return { message: 'Item deleted successfully'}
  }
});