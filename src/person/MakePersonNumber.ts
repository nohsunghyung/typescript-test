const MAX_AGE = 100;

export const makeRandomNumber = (max: number = MAX_AGE) => {
  return Math.ceil((Math.random() * max))
}