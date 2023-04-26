import { dotenvConfig } from "./helpers/dotenvConfig.js";
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import appListener from "./helpers/appListener.js";
import routesHandler from "./routes/index.js";

dotenvConfig()

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true
}))
app.use(cookieParser())

app.use('/', routesHandler(express))

const PORT = process.env.DEV_PORT
const HOST = process.env.DEV_HOST

appListener(app, PORT, HOST)