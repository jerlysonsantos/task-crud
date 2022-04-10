import path from 'path'
import { DataSource } from 'typeorm'
import { env, loadEnv } from 'Env'

loadEnv()

const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [path.join(__dirname, '../app/Models/*.ts')],
  synchronize: true,
  logging: false,
})

export default AppDataSource
