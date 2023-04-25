import userRouteProvider from './user.route.js'
import studentRouteProvider from './student.route.js'
import teacherRouteProvider from './teacher.route.js'
import courseRouteProvider from './course.route.js'

export default function routesHandler(express) {

    const router = express.Router()
    
    userRouteProvider(router)

    studentRouteProvider(router)

    teacherRouteProvider(router)

    courseRouteProvider(router)

    return router

}