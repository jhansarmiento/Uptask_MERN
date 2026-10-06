import type { Request, Response } from 'express'
import { validationResult, matchedData } from 'express-validator'
import Project from '../models/Project.js'

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {

        const project = new Project(req.body)
        
        try {
            await project.save()
            res.send('Project created successfully')
        } catch (error) {
            res.status(500).send('Error creating project')
        }
    }
    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find()
            res.json(projects)
        } catch (error) {
            res.status(500).send('Error fetching projects')
        }
    }
    static getProjectById = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const project = await Project.findById(id)
            if(!project) {
                const error = new Error('Project not found')
                return res.status(404).json({ msg: error.message })
            }
            res.json(project)
        } catch (error) {
            res.status(500).send('Error fetching project')
        }
    }

    static updateProject = async (req: Request, res: Response) => {
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const { id } = req.params

            const cleanData = matchedData(req, { locations: ['body'] })

            const project = await Project.findByIdAndUpdate(id, cleanData, { new: true })
            if(!project) {
                const error = new Error('Project not found')
                return res.status(404).json({ msg: error.message })
            }
            res.send('Project updated successfully')
        } catch (error) {
            res.status(500).send('Error updating project')
        }
    }
}