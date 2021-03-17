export function makePerson(name: string, age: number){
  return {name, age}
}

export const testMakePerson = () => {
  console.log(
    makePerson('nolu', 33)
  )
}