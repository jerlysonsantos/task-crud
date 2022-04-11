import { assert } from '@japa/assert'
import { apiClient } from '@japa/api-client'
import { specReporter } from '@japa/spec-reporter'
import { processCliArgs, configure, run } from '@japa/runner'

configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    files: ['tests/**/*.spec.ts'],
    plugins: [assert(), apiClient('http://localhost:3000')],
    reporters: [specReporter()],
    importer: filePath => import(filePath),
  },
})

run()
