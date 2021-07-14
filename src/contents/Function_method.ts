/* 함수와 메서드 */

/* void 타입 - 반환값이 없을경우 */
const voidFunc = (name: string, age: number): void => {
  console.log('void 함수');
};
voidFunc('void함수', 34);

/* 함수 시그니쳐 */
type stringNumFunc = (a: string, b: number) => void;
let func1: stringNumFunc = function (a: string, b: number): void {
  // console.log(a, b);
};

func1('asdfadsf', 4444);

type stringNum2 = (a: string, b?: number) => void;

let stringNum2 = function func2(a: string, arg?: number): void {
  console.log(a, arg);
};

stringNum2('선택적 매개변수');
