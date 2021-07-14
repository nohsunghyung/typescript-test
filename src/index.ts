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

// ------------------------------------------------------------------------

// 1. 객체와 인터페이스
import './contents/Object_interface';
// 2. 함수와 메서드
import './contents/Function_method';
