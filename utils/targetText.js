const getTargetTextArray = isFileType => {
  if (isFileType) {
    return ['-', 'd']
  } else {
    return ['r', 'w', 'x']
  }
}

export default getTargetTextArray
