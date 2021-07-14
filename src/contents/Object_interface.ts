// 오브젝트와 인터페이스

/* interface는 속성이 있는지 체크 */

interface IPerson {
  name: string;
  age: number;
}

let person: IPerson = { name: '노성형', age: 33 };
// let person2: IPerson = { name: '홍길동' }; age 속성이 없으므로 오류

/* 속성뒤에 물음표를 붙히면 선택속성이 된다 */

interface IPerson1 {
  name: string;
  age: number;
  etc?: boolean;
}

let person1: IPerson1 = { name: '홍길동', age: 33, etc: false };
let person2: IPerson1 = { name: '홍길동2', age: 33 };

/* 생성자 */
class Person2 {
  constructor(public name: string, public age: number) {}
}

let person3 = new Person2('jack', 33);

class Person3 {
  name: string;
  age?: number;
}

/* 클래스의 인터페이스 */
class Person4 implements IPerson1 {
  constructor(public name: string, public age: number) {}
}

/* 추상 클래스 */
abstract class AbstractPerson {
  abstract name: string;
  constructor(public age?: number) {}
}

class Person5 extends AbstractPerson {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let person5 = new Person5('노성형', 33);
console.log(person5);

/* 정적 속성 */
class A {
  static initValue = 1;
}

let initValue = A.initValue;
console.log(initValue);

/* 잔여 연산자 */
let infoObj: any = {
  username: 'noh',
  age: 33,
  add: '신석로',
  job: 'dev',
};

let { username, age, ...rest } = infoObj;

/* 객체의 타입변환 */
let typeObj: object = { name: '노성형', age: 35 };
(<{ name: string }>typeObj).name = '노노';

console.log(typeObj);
