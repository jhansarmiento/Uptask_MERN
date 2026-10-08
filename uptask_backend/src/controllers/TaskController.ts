import type { Request, Response } from 'express'
import { validationResult, matchedData } from 'express-validator'
import Project from '../models/Project.js'
import Task from '../models/Task.js'

export class TaskController {

    static createTask = async (req: Request, res: Response) => {
        
        const { projectId } = req.params
        const project = await Project.findById(projectId)
        
        if(!project) {
            const error = new Error('Project not found')
            return res.status(404).json({ msg: error.message })
        }

        try {
            const task = new Task(req.body)
            task.project = project._id
            project.tasks.push(task._id)
            await task.save()
            await project.save()
            res.send('Task created successfully')
        } catch (error) {
            console.log(error)
        }
    }
}