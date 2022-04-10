import { Request, Response, NextFunction } from 'express'

export default class Exception extends Error {
  public statusCode: number
  public code: string

  constructor(statusCode: number, message: string, code: string) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.code = code
  }
}

export interface Error {
  statusCode: number
  message: string
  code: string
}

export const ErrorHandling = (
  err: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => {
  const { statusCode = 500, message, code = 'E_INTERNAL_ERROR' } = err

  return _res.status(statusCode).json({
    code,
    message,
  })
}
