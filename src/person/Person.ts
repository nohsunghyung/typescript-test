import * as U from './MakePersonNumber';
import IPerson from './IPerson';

export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

export const makePerson = (
  name: string,
  age: number = U.makeRandomNumber(10)
) => ({
  name,
  age,
});
