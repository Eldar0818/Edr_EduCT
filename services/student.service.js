import { DB } from "../database.js"

export function getStudents(response){
    
    const query = "SELECT * FROM students"
    DB.query(query, (error, data) => {
        if(error) return response.json(error)
        response.status(200).json(data)
    })

}

export function createStudent(body, response) {

    const { firstname, lastname, course, startingDate, email, phone } = body
    const query = "INSERT INTO students (`firstname`, `lastname`, `course`, `startingDate`, `email`, `phone`) VALUES(?)"
    const values = [firstname, lastname, course, startingDate, email, phone]

    DB.query(query, [values], (error, data) => {
        if(error) return response.json(error)
        response.status(201).json("Student has been created.")
    })

}

export function updateStudent(student, id, response) {

    const query = "UPDATE students SET `firstname` = ?, `lastname` = ?, `course` = ?, `startingDate` = ?, `email` = ?, `phone` = ? WHERE id = ?"
    const values = [student.firstname, student.lastname, student.course, student.startingDate, student.email, student.phone]

    DB.query(query, [...values, id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json("Student has been updated.")
    })

}

export function getOneStudent(id, response) {

    const query = "SELECT * FROM students WHERE id = ?"

    DB.query(query, [id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json(data)
    })

}

export function deleteStudent(id, response) {

    const query = "DELETE FROM students WHERE id = ?"

    DB.query(query, [id], (error, data) => {
        if(error) return response.json(error)
        response.status(200).json("Student has been deleted.")
    })

}