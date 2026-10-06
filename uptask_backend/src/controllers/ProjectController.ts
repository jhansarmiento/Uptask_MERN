import type { Request, Response } from 'express'
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
}