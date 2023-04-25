import { DB } from "../database.js"

export const getTeachers = (response) => {
    
    const query = "SELECT * FROM teachers"

    DB.query(query, (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json(data)
    })

}

export const createTeacher = (body, response) => {

    const { firstname, lastname, course, email, phone, salary } = body

    const query = "INSERT INTO teachers (`firstname`, `lastname`, `course`, `email`, `phone`, `salary`) VALUES(?)"
    const values = [firstname, lastname, course, email, phone, salary]
    DB.query(query, [values], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(201).json("Teacher has been created.")
    })

}

export const updateTeacher = (teacher, id, response) => {

    const query = "UPDATE teachers SET `firstname` = ?, `lastname` = ?, `course` = ?, `email` = ?, `phone` = ?, `salary` = ? WHERE id = ?"
    const values = [teacher.firstname, teacher.lastname, teacher.course, teacher.email, teacher.phone, teacher.salary]
    DB.query(query, [...values, id], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json("Teacher has been updated.")
    })

}

export const getOneTeacher = (id, response) => {

    const query = "SELECT * FROM teachers WHERE id = ?"
    DB.query(query, [id], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json(data)
    })

}

export const deleteTeacher = (id, response) => {

    const query = "DELETE FROM teachers WHERE id  = ?"
    DB.query(query, [id], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json("Teacher has been removed.")
    })

}