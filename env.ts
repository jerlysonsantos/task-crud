import { EnvType, load } from 'ts-dotenv'

export type Env = EnvType<typeof schema>

export const schema = {
  NODE_ENV: String,
  PORT: Number,
  DB_HOST: String,
  DB_USERNAME: String,
  DB_PASSWORD: String,
  DB_PORT: Number,
  DB_NAME: String,
  DB_SSL: Boolean,
}

export let env: Env

export function loadEnv(): void {
  env = load(schema)
}
