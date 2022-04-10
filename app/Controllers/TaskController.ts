import { Controller, Get, ClassErrorMiddleware } from '@overnightjs/core'
import AppDataSource from 'Config/database'
import Exception, { ErrorHandling } from 'Lib/Exception'

import Task from 'App/Models/Task'

import { Request, Response, NextFunction } from 'express'

@Controller('task')
@ClassErrorMiddleware(ErrorHandling)
class TaskController {
  @Get('')
  private async get(_req: Request, _res: Response, next: NextFunction) {
    try {
      const taskRepository = AppDataSource.getRepository(Task)

      const tasks = await taskRepository.find()

      _res.status(200).send({ tasks })
    } catch (error) {
      next(error)
    }
  }
}

export default new TaskController()
