import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root2',
  password: '123',
  database: 'paginaAhJijo'
});
 
export default db;