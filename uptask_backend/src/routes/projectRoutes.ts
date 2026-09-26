import { Router } from 'express'
import { ProjectController } from '../controllers/ProjectController.js'

const router: Router = Router()

// Define your project routes here
router.get('/', ProjectController.getAllProjects)

export default router