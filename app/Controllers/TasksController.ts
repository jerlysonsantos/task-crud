import {
  Controller,
  Get,
  ClassErrorMiddleware,
  Post,
  Put,
  Delete,
  Middleware,
} from '@overnightjs/core'
import Database from 'Config/database'
import Exception, { ErrorHandling } from 'Lib/Exception'

import Task from 'App/Models/Task'
import { createValidator, editValidator } from 'App/Validations/TaskValidator'

import { Request, Response, NextFunction } from 'express'

@Controller('tasks')
@ClassErrorMiddleware(ErrorHandling)
class TaskController {
  @Get('')
  public async index(_req: Request, _res: Response, next: NextFunction) {
    try {
      const taskRepository = Database.getRepository(Task)

      const tasks = await taskRepository.find()

      _res.status(200).send({ tasks })
    } catch (error) {
      next(error)
    }
  }

  @Get(':id')
  public async get(_req: Request, _res: Response, next: NextFunction) {
    try {
      const { id } = _req.params

      const taskRepository = Database.getRepository(Task)

      const task = await taskRepository.findOne({
        where: {
          id: Number(id),
        },
      })

      if (!task) throw new Exception(404, 'Task not found', 'E_NOT_FOUND')

      _res.status(200).send({ task })
    } catch (error) {
      next(error)
    }
  }

  @Post('create')
  @Middleware([createValidator])
  public async create(_req: Request, _res: Response, next: NextFunction) {
    try {
      const { title, description } = _req.body

      const task = await Database.createQueryBuilder()
        .insert()
        .into(Task)
        .values([
          {
            title,
            description,
          },
        ])
        .execute()

      _res
        .status(200)
        .send({ message: 'Task Created', task_id: task.identifiers[0].id })
    } catch (error) {
      next(error)
    }
  }

  @Put('edit/:id')
  @Middleware([editValidator])
  public async update(_req: Request, _res: Response, next: NextFunction) {
    try {
      const {
        body: { title, description, status },
        params: { id },
      } = _req

      const taskRepository = Database.getRepository(Task)

      const task = await taskRepository.findOne({
        where: {
          id: Number(id),
        },
      })

      if (!task) throw new Exception(400, 'Task not found.', 'E_NOT_FOUND')

      const taskFactory = new Task()

      if (title) taskFactory.title = title
      if (description) taskFactory.description = description
      if (status) taskFactory.status = status

      await taskRepository
        .createQueryBuilder()
        .update()
        .set(taskFactory)
        .where('id = :id', { id })
        .execute()

      _res.status(200).send({ message: 'Task Updated' })
    } catch (error) {
      next(error)
    }
  }

  @Put('finish/:id')
  public async finish(_req: Request, _res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
      } = _req

      const taskRepository = Database.getRepository(Task)

      const task = await taskRepository.findOne({
        where: {
          id: Number(id),
        },
      })

      if (!task) throw new Exception(400, 'Task not found.', 'E_NOT_FOUND')

      await taskRepository
        .createQueryBuilder()
        .update()
        .set({ status: 'FINISHED', finished_at: new Date() })
        .where('id = :id', { id })
        .execute()

      _res.status(200).send({ message: 'Task Finished' })
    } catch (error) {
      next(error)
    }
  }

  @Delete('delete/:id')
  public async delete(_req: Request, _res: Response, next: NextFunction) {
    try {
      const { id } = _req.params

      const taskRepository = Database.getRepository(Task)

      const task = await taskRepository.findOne({
        where: {
          id: Number(id),
        },
      })

      if (!task) throw new Exception(400, 'Task not found.', 'E_NOT_FOUND')

      await taskRepository
        .createQueryBuilder()
        .delete()
        .where('id = :id', { id })
        .execute()

      _res.status(200).send({ message: 'Task Removed' })
    } catch (error) {
      next(error)
    }
  }
}

export default new TaskController()
