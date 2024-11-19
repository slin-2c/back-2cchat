import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();
const db = new Sequelize("2cchat", "avnadmin", process.env.MYSQLPASSWORD, {
  dialect: "mysql",
  host: "mysql-18eed721-slin2505-07ca.e.aivencloud.com",
  port: "18134",
});

export default db;
