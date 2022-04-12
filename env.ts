import { EnvType, load } from 'ts-dotenv'

export type Env = EnvType<typeof schema>

export const schema = {
  NODE_ENV: String,
  PORT: Number,
  DB_HOST: {
    type: String,
    optional: true,
  },
  DB_USERNAME: {
    type: String,
    optional: true,
  },
  DB_PASSWORD: {
    type: String,
    optional: true,
  },
  DB_PORT: {
    type: Number,
    optional: true,
  },
  DB_NAME: {
    type: String,
    optional: true,
  },
  DB_SSL: {
    type: Boolean,
    optional: true,
  },
  DATABASE_URL: {
    type: String,
    optional: true,
  },
}

export let env: Env

export function loadEnv(): void {
  env = load(schema)
}
