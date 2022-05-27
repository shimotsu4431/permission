const R = 'r'
const W = 'w'
const X = 'x'
const HYPHEN = '-'

export const getPermissionBinary = list => {
  const read = list[0] // r or -
  const write = list[1] // w or -
  const execute = list[2] // x or -

  if (read !== R && read !== HYPHEN) return HYPHEN
  if (write !== W && write !== HYPHEN) return HYPHEN
  if (execute !== X && execute !== HYPHEN) return HYPHEN

  const read_num = read === R ? 4 : 0
  const write_num = write === W ? 2 : 0
  const execute_num = execute === X ? 1 : 0

  const result = read_num + write_num + execute_num

  return result
}

export const getPermissionOctal = list => {
  const read = list[0] // r or -
  const write = list[1] // w or -
  const execute = list[2] // x or -

  const read_num = read === R ? 1 : 0
  const write_num = write === W ? 1 : 0
  const execute_num = execute === X ? 1 : 0

  if (read !== R && read !== HYPHEN) return HYPHEN
  if (write !== W && write !== HYPHEN) return HYPHEN
  if (execute !== X && execute !== HYPHEN) return HYPHEN

  const result = `${read_num}${write_num}${execute_num}`

  return result
}
