let age: number;
age = 50;

let userName: string;
userName = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callbackFunc: (a: number) => number;
callbackFunc = (a) => {
  return 100 + a;
};

//-----------------

let anything: any;
anything = -20;
anything = "Text";
anything = {};

//-----------------

let some: unknown;

some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

//-----------------

let person: [string, number];
person = ["Max", 21];

//-----------------

enum Load {
  LOADING,
  READY,
}

const page = { load: Load.READY };

if (page.load === Load.LOADING) {
  console.log("Page loading");
}

if (page.load === Load.READY) {
  console.log("Page loaded");
}

//-----------------

let union: string | number;

let literal: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//-----------------

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: { createAt: string; updateAt: string };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

//-----------------

function createServerPerson(name: string) {
  return (() => {
    return { name: `${name}` };
  })();
}

function createPerson(name: string): {name: string} {
  return createServerPerson(name);
}

const newPerson = createPerson("Alex");

console.log(newPerson);

//-----------------

function culc(num1:number, num2:number, callback: (arrg1: number, arrg2:number) => number ) {
return callback(num1, num2)
}

function foo(num1: number, num2: number) {
  return num1 + num2;
}

const result = culc(1, 2, foo)

console.log(result);

//-----------------


//----------------- custom types

export{}