import type { Request, Response } from 'express'

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {
        console.log(req.body)
        res.send('Project created successfully')
    }
    static getAllProjects = async (req: Request, res: Response) => {
        res.send('Showing all projects')
    }
}