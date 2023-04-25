import { createStudent, deleteStudent, getOneStudent, getStudents, updateStudent } from "../services/student.service.js";

export const GetStudents = (req, res) => getStudents(res)

export const CreateStudent = (req, res) => createStudent(req.body, res)

export const UpdateStudent = (req, res) => updateStudent(req.body, req.params.id, res)

export const GetStudentById = (req, res) => getOneStudent(req.params.id, res)

export const DeleteStudent = (req, res) => deleteStudent(req.params.id, res)