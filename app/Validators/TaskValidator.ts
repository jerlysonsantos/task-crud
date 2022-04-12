import { Request, Response, NextFunction } from 'express'

import Validator from 'Lib/Validator'

export function createValidator(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  const rules = {
    title: 'required|string',
    description: 'string|max:500',
  }

  Validator(_req.body, rules, (err: any, status: boolean) => {
    if (!status) {
      _res.status(400).send({
        code: 'E_VALIDATE',
        message: 'Validation failed',
        data: err,
      })
    } else {
      next()
    }
  })
}

export function editValidator(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  const rules = {
    title: 'string',
    description: 'string|max:500',
    status: 'string',
  }

  Validator(_req.body, rules, (err: any, status: boolean) => {
    if (!status) {
      _res.status(400).send({
        code: 'E_VALIDATE',
        message: 'Validation failed',
        data: err,
      })
    } else {
      next()
    }
  })
}
