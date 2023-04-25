import { CreateCourse, DeleteCourse, GetCoutses } from "../controllers/course.controller.js"

const courseRouteProvider = (router) => {

    router.get('/api/courses', GetCoutses)

    router.post('/api/courses', CreateCourse)

    router.delete('/api/courses/:id', DeleteCourse)

}

export default courseRouteProvider