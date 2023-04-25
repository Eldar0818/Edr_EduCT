import { CreateTeacher, GetTeachers, UpdateTeacher,  GetTeacherById, DeleteTeacher } from "../controllers/teacher.controller.js"


const teacherRouteProvider = (router) => {

    router.get('/api/teachers', GetTeachers)

    router.post('/api/teachers', CreateTeacher)

    router.put('/api/teacher/:id', UpdateTeacher)

    router.get('/api/teacher/:id',  GetTeacherById)

    router.delete('/api/teacher/:id', DeleteTeacher)

}

export default teacherRouteProvider