const setText = characterList => {
  return characterList.map((item, i) => {
    return {
      index: i,
      value: item,
    }
  })
}

export default setText
