import DbConnection from "./helpers/DbConnection.js";
import dotenv from "dotenv"

dotenv.config()

export const DB = DbConnection(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME)