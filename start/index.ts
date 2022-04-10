import './module-alias'
import { loadEnv, env } from 'Env'

import 'reflect-metadata'

import { SetupServer } from './server'

loadEnv()

const server = new SetupServer(env.PORT)

server.init()
