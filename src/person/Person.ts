import {makeRandomNumber} from './MakePersonNumber';
import IPerson from './Iperson'

export default class Person implements IPerson {
  constructor(public name: string, public age: number){}
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({name, age})