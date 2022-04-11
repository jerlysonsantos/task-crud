import { Request, Response, NextFunction } from 'express'
import Exception from 'Lib/Exception'

export function createValidator(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { title } = _req.body

    if (!title) throw new Exception(400, 'title is required.', 'E_VALIDATE')
    if (typeof title !== 'string')
      throw new Exception(400, 'title must be string.', 'E_VALIDATE')

    next()
  } catch (error) {
    next(error)
  }
}

export function editValidator(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { title, description, status } = _req.body

    if (typeof title !== 'string')
      throw new Exception(400, 'title must be string.', 'E_VALIDATE')

    if (typeof description !== 'string')
      throw new Exception(400, 'description must be string.', 'E_VALIDATE')

    if (typeof status !== 'string')
      throw new Exception(400, 'status must be string.', 'E_VALIDATE')

    next()
  } catch (error) {
    next(error)
  }
}
