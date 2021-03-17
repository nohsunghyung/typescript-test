"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name: name, age: age };
}
exports.makePerson = makePerson;
var testMakePerson = function () {
    console.log(makePerson('nolu', 33));
};
exports.testMakePerson = testMakePerson;
