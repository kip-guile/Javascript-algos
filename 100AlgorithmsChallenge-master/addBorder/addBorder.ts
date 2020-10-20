function addBorder(picture: string[]): string[] {
  let newArr = []
  let wall = ''
  for (let i = 0; i < picture[0].length + 2; i++) {
    wall = wall.concat('*')
  }
  newArr.push(wall)
  for (let i = 0; i < picture.length; i++) {
    newArr.push('*'.concat(picture[i], '*'))
  }
  newArr.push(wall)
  return newArr
}

console.log(addBorder(['abc', 'ded']))
