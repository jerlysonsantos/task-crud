import Validator, { ValidationErrors, Rules } from 'validatorjs'

const validator = (
  body: unknown,
  rules: Rules,
  callback: (error: ValidationErrors, status: boolean) => void,
) => {
  const validation = new Validator(body, rules)

  validation.passes(() => callback(null, true))
  validation.fails(() => callback(validation.errors.all(), false))
}

export default validator
