import { DB } from "../database.js"
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export function getUsers(response){
    
    const query = "SELECT * FROM users"
    DB.query(query, (error, data) => {
        if(error) return response.json(error)
        response.status(200).json(data)
    })

}

export function createUser(response, userId, username, phone, email, password){

    const checkQ = "SELECT * FROM users WHERE username = ? OR email = ?"

    DB.query(checkQ, [username, email],(error, data) => {

        if(error) return response.json(error)
        if(data.length) return response.status(409).json("User exist!")

        const query = "INSERT INTO users (`userId`, `username`, `phone`, `email`, `password`) VALUES(?)"

        const values = [ userId, username, phone, email, password ]

        DB.query(query, [values], (error, data) => {
            if(error) return response.json(error)
            response.status(201).json("User has been created.")
        })

    })

}

export function updateUser(user, id, response) {

    const query = "UPDATE users SET `username` = ?, `phone` = ?, `email` = ?, `password` = ? WHERE id = ?"

    const values = [
        user.username,
        user.phone,
        user.email,
        user.password
    ]

    DB.query(query, [...values, id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json("User has been updated.")
    })

}

export function getOneUser(id, response) {

    const query = "SELECT * FROM users WHERE id = ?"
    DB.query(query, [id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json(data)
    })

}

export function deleteUser(id, response) {
    
    const query = "DELETE FROM users WHERE id = ?"
    DB.query(query, [id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json("User has been deleted...")
    })

}

export function userLogin(body, response) {

    const checkQ = "SELECT *  FROM users WHERE username = ?"

    DB.query(checkQ, [body.username], (error, data) => {

        if(error) return response.status(500).json(error)
        if(data.length === 0) return response.status(404).json("User not found :(")

        const user = data[0]

        const validatePassword =user.password === body.password
        if(!validatePassword) return response.status(403).json("Wrong password!")

        const token = JWT.sign({ id: user.userId }, process.env.JWT_SECRET_KEY)
        const {password, ...other} = user

        response.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)

    })

}