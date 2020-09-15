const switchArray = (num) =>{
  return new Array(num);
}
const hideName = (name) => {
  return name.slice(0,1)+new Array(name.length-1).fill('*').join('')
}

export {
  switchArray,
  hideName
}