import { DB } from "../database.js"

export function getUsers(response){
    
    const query = "SELECT * FROM users"
    DB.query(query, (error, data) => {
        if(error) return response.json(error)
        response.status(200).json(data)
    })

}

export function createUser(response, userId, username, phone, email, password){

    const query = "INSERT INTO users (`userId`, `username`, `phone`, `email`, `password`) VALUES(?)"

    const values = [ userId, username, phone, email, password ]

    DB.query(query, [values], (error, data) => {
        if(error) return response.json(error)
        response.status(201).json("User has been created.")
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