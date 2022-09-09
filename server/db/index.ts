import connection from "./db-config";

const db = connection.promise();

export default db;