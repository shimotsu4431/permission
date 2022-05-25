const getTargetTextArray = type => {
  if (type === 'file') {
    return ['-', 'd']
  } else if (type === 'read') {
    return ['-', 'r']
  } else if (type === 'write') {
    return ['-', 'w']
  } else if (type === 'execute') {
    return ['-', 'x']
  }
}

export default getTargetTextArray
