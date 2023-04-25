import { DB } from "../database.js";

export const getCourses = (response) => {

    const query = "SELECT * FROM courses"
    DB.query(query, (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json(data)
    })

}

export const createCourse = (body, response) => {

    const { title } = body

    const query = "INSERT INTO courses (`title`) VALUES(?)"
    const values = [title]
    DB.query(query, [values], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(201).json("Course has been created.")
    })

}

export const deleteCourse = (id, response) => {

    const query = "DELETE FROM courses WHERE id = ?"
    DB.query(query, [id], (error, data) => {
        if(error) return response.status(500).json(error)
        response.status(200).json("Course has been deleted.")
    })

}