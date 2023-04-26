import { CreateUser, DeleteUser, GetUserById, GetUsers, UpdateUser, UserLogin } from "../controllers/user.controller.js"

const userRouteProvider = (router) => {

    router.get('/api/users', GetUsers)

    router.post('/api/users', CreateUser)

    router.put('/api/user/:id', UpdateUser)

    router.get('/api/user/:id', GetUserById)

    router.delete('/api/user/:id', DeleteUser)

    router.post('/api/login', UserLogin)

}

export default userRouteProvider