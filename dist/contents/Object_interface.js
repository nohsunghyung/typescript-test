// 오브젝트와 인터페이스
var person = { name: '노성형', age: 33 };
var person1 = { name: '홍길동', age: 33, etc: false };
var person2 = { name: '홍길동2', age: 33 };
/* 생성자 */
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var person3 = new Person2('jack', 33);
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    return Person3;
}());
//# sourceMappingURL=Object_interface.js.map