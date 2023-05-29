"use strict";
let user;
user = {
    name: 'John',
    age: 36,
    greet(phrase) {
        console.log(phrase + ' My name is ' + this.name);
    },
};
user.greet('Hi all!');
//# sourceMappingURL=objectInterface.js.map