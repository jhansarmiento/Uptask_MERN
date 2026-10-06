import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController.js'
import { handleInputErrors } from '../middleware/validation.js'

const router: Router = Router()

// Define your project routes here
router.post('/', 
    body('projectName').notEmpty().withMessage('Project name is required'),
    body('clientName').notEmpty().withMessage('Client name is required'),    
    body('projectDescription').notEmpty().withMessage('Project description is required'),
    handleInputErrors,
    ProjectController.createProject)

router.get('/', ProjectController.getAllProjects)

router.get('/:id', 
    param('id').isMongoId().withMessage('Invalid project ID'),
    handleInputErrors,
    ProjectController.getProjectById
)

router.put('/:id',
    param('id').isMongoId().withMessage('Invalid project ID'),
    body('projectName').optional().notEmpty().withMessage('Project name cannot be empty'),
    body('clientName').optional().notEmpty().withMessage('Client name cannot be empty'),    
    body('projectDescription').optional().notEmpty().withMessage('Project description cannot be empty'),
    handleInputErrors,
    ProjectController.updateProject
)

router.delete('/:id',
    param('id').isMongoId().withMessage('Invalid project ID'),
    handleInputErrors,
    ProjectController.deleteProject
)

export default router