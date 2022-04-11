import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import Database from 'Config/database'
import { ErrorHandling } from 'Lib/Exception'

import { Request, Response, Application } from 'express'

import TaskController from 'App/Controllers/TasksController'

import cors from 'cors'

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super()
  }

  public async init(): Promise<void> {
    this.setupExpress()
    this.setupControllers()
    this.start()
  }

  private setupExpress(): void {
    console.log('Setting Up Express')

    this.app.set('trust proxy', true)
    this.app.use(cors())
    this.app.use(bodyParser.json())

    this.app.get('/health', (_req: Request, _res: Response, _next) => {
      _res.status(200).send({ ok: true })
    })

    this.app.use(ErrorHandling)
  }

  private setupControllers(): void {
    console.log('Setting Up Controllers')

    super.addControllers([TaskController])
  }

  private start(): void {
    Database.initialize()
      .then(() => {
        console.log('Database Started')
      })
      .catch(error => console.log(error))

    this.app.listen(this.port, () => {
      console.log('Server listening on port: ' + this.port)
    })
  }

  public getApp(): Application {
    return this.app
  }
}
