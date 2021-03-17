var MAX_AGE = 100;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var makeRandomNumber = function (max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
};
var makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNumber(); }
    return ({ name: name, age: age });
};
var testMakePerson = function () {
    var jane = makePerson('jane');
    console.log(jane);
};
