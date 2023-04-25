import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import appListener from "./helpers/appListener.js";
import routesHandler from "./routes/index.js";

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors({
    credentials: true
}))

app.use('/', routesHandler(express))

const PORT = process.env.DEV_PORT
const HOST = process.env.DEV_HOST

appListener(app, PORT, HOST)