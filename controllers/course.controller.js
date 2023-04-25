import { createCourse, deleteCourse, getCourses } from "../services/course.services.js";

export const GetCoutses = (req, res) => getCourses(res)

export const CreateCourse = (req, res) => createCourse(req.body, res)

export const DeleteCourse = (req, res) => deleteCourse(req.params.id, res)