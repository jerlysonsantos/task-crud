import Validator from 'validatorjs'

const validator = (body: any, rules: any, callback: any) => {
  const validation = new Validator(body, rules)

  validation.passes(() => callback(null, true))
  validation.fails(() => callback(validation.errors.all(), false))
}

export default validator
