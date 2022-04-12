import path from 'path'
import { DataSource } from 'typeorm'
import { env, loadEnv } from 'Env'

loadEnv()

const Database = new DataSource({
  type: 'postgres',
  url: env.DATABASE_URL,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [path.join(__dirname, '../app/Models/*{.ts,.js}')],
  synchronize: true,
  logging: false,
  ssl: env.DB_SSL && {
    rejectUnauthorized: false,
  },
})

export default Database
