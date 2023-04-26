import DbConnection from "./helpers/DbConnection.js";
import { dotenvConfig } from "./helpers/dotenvConfig.js";

dotenvConfig()

export const DB = DbConnection(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME)