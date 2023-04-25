import { createTeacher, deleteTeacher, getOneTeacher, getTeachers, updateTeacher } from "../services/teacher.service.js";

export const GetTeachers = (req, res) => getTeachers(res)

export const CreateTeacher = (req, res) => createTeacher(req.body, res)

export const UpdateTeacher = (req, res) => updateTeacher(req.body, req.params.id, res)

export const GetTeacherById = (req, res) => getOneTeacher(req.params.id, res)

export const DeleteTeacher = (req, res) => deleteTeacher(req.params.id, res)