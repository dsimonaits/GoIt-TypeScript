let age;
age = 50;
let userName;
userName = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callbackFunc;
callbackFunc = (a) => {
    return 100 + a;
};
//-----------------
let anything;
anything = -20;
anything = "Text";
anything = {};
//-----------------
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
//-----------------
let person;
person = ["Max", 21];
//-----------------
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = { load: Load.READY };
if (page.load === Load.LOADING) {
    console.log("Page loading");
}
if (page.load === Load.READY) {
    console.log("Page loaded");
}
//-----------------
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//-----------------
function createServerPerson(name) {
    return (() => {
        return { name: `${name}` };
    })();
}
function createPerson(name) {
    return createServerPerson(name);
}
const newPerson = createPerson("Alex");
console.log(newPerson);
//-----------------
function culc(num1, num2, callback) {
    return callback(num1, num2);
}
function foo(num1, num2) {
    return num1 + num2;
}
const result = culc(1, 2, foo);
console.log(result);
export {};
//# sourceMappingURL=types.js.map