const getTargetTextArray = type => {
  const result = ['-']

  if (type === 'file') {
    return [...result, 'd']
  } else if (type === 'read') {
    return [...result, 'r']
  } else if (type === 'write') {
    return [...result, 'w']
  } else if (type === 'execute') {
    return [...result, 'x']
  }
}

export default getTargetTextArray
