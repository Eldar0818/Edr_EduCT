import { getUsers, createUser, updateUser, getOneUser, deleteUser } from "../services/user.service.js"
import generateUserID from "../helpers/userIdGenarator.js"

export const GetUsers = (req, res) => getUsers(res)

export const CreateUser = (req, res) => {
    const { username, phone, email, password } = req.body
    createUser(res, generateUserID(), username, phone, email, password)
}

export const UpdateUser = (req, res) => {
    const user = req.body
    const paramsId = req.params.id
    updateUser(user, paramsId, res)
}

export const GetUserById = (req, res) => getOneUser(req.params.id, res)

export const DeleteUser = (req, res) => deleteUser(req.params.id, res)