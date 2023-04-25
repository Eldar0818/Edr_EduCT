import { CreateStudent, DeleteStudent, GetStudentById, GetStudents, UpdateStudent } from "../controllers/student.controller.js"

const studentRouteProvider = (router) => {

    router.get('/api/students', GetStudents)

    router.post('/api/students', CreateStudent)

    router.put('/api/student/:id', UpdateStudent)

    router.get('/api/student/:id', GetStudentById)

    router.delete('/api/student/:id', DeleteStudent)

}

export default studentRouteProvider