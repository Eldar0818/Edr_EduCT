import { logger } from "./logger.js"

function appListener(app, port, host){
    app.listen(port, host, () => {
        const noteification = `SERVER STARTED, PORTAL ADDRESS: http://${host}:${port}`
        logger(noteification)
    })
}

export default appListener