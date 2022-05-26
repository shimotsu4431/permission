export const getPermissionBinary = list => {
  const read = list[0] // r or -
  const write = list[1] // w or -
  const execute = list[2] // x or -

  const read_num = read === 'r' ? 4 : 0
  const write_num = write === 'w' ? 2 : 0
  const execute_num = execute === 'x' ? 1 : 0

  const result = read_num + write_num + execute_num

  return result
}

export const getPermissionOctal = list => {
  const read = list[0] // r or -
  const write = list[1] // w or -
  const execute = list[2] // x or -

  const read_num = read === 'r' ? 1 : 0
  const write_num = write === 'w' ? 1 : 0
  const execute_num = execute === 'x' ? 1 : 0

  // const result = read_num * 100 + write_num * 10 + execute_num
  const result = `${read_num}${write_num}${execute_num}`

  return result
}
