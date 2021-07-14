import IPerson from './person/IPerson';
import Person, { makePerson } from './person/Person';
import Chance from 'chance';
import * as R from 'ramda';
let chance = new Chance();

let persons = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);

// console.log(persons);

// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson('Jane');
//   let mark: IPerson = makePerson('Mark');

//   console.log(jane, mark);
// };

// testMakePerson();

// any타입은 최상위 타입
let b: any = 10;
b = '문자열변경';

// ---- undefined는 최하위 타입
let a: string = '문자열';
a = undefined;
