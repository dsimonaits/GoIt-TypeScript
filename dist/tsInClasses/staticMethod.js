"use strict";
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    static isStaticMethod() {
        console.log('I am static');
    }
    showCount() {
        console.log(UseStatic.count);
    }
}
UseStatic.count = 0;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.isStaticMethod();
//# sourceMappingURL=staticMethod.js.map