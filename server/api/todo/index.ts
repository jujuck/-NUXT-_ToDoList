import { v4 as uuid} from 'uuid';
import db from '../../db';
import { createError, sendError} from "h3";

export default defineEventHandler(async(event) => {
  const { method } = event.req;
  if (method === "GET") {
    const res = await db.query('select * from todolist');
    return res[0]
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

    console.log(body.item)
    const res = await db.query('INSERT INTO todolist (item, completed) VALUES (?, ?)', [body.item, false]);
    console.log(res)
    return {
      id: res[0].insertId,
      item: body.item,
      completed: false
    };
  }
});