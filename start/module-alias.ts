import path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../')

moduleAlias.addAliases({
  App: path.join(files, 'app'),
  Lib: path.join(files, 'lib'),
  Env: path.join(files, 'env.ts'),
  Config: path.join(files, 'config'),
})
