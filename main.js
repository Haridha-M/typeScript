"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "welcome";
console.log(message);
var a = 123;
a = 1;
a = "message";
var b;
b = 3.4;
b = 3;
var c;
c = "uifuwegeg";
var e;
e = true;
var f;
f = null;
var h;
h = undefined;
var arr = [1, 5, 'abc'];
var arrstr = ['raj', 1, true];
var multitype;
multitype = 1;
multitype = "string";
var obj = {
    name: "fetfd",
    age: 24,
    amount: 6000
};
obj.age = 24;
function sum(a, b) {
    return a + b;
}
function s(a) {
    return a.toLowercase();
}
function s2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
console.log(s2("HI", "hello"));
function add(point) {
    return point.x = point.y;
}
var p = {
    x: 1,
    y: 6
};
console.log(add(p));
function add1(point) {
    return point.x = point.y;
}
console.log(add1(p));
var Person = /** @class */ (function () {
    function Person(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
    Person.prototype.getName = function () {
        return this.name;
        return this.color;
        return this.model;
    };
    return Person;
}());
var person = new Person("Jane", "red", 13);
console.log(person.getName());
var str1 = "haridha";
console.log(str1.split());
var j = "hihello";
var Count = {};
var str = j.split('');
str.map(function (e) { Count[e] = (Count[e] || 0) + 1; });
console.log("Output 4:", Count);
var ha = [{
        name: 'hari',
        age: 18,
        std: 12,
        address: 'chennai'
    },
    {
        name: 'ram',
        age: 18,
        std: 12,
        address: 'chennai'
    },
    {
        name: 'priya',
        age: 17,
        std: 11,
        address: 'chennai'
    },
    {
        name: 'raj',
        age: 16,
        std: 10,
        address: 'chennai'
    }];
var obj1 = {};
ha.map(function (e) {
    if (!(e.std in obj1)) {
        obj1[e.std] = [];
    }
    obj1[e.std].push(e);
});
console.log("Output 5:", obj1);
function Dup(d) {
    var remove = d.map(function (e) {
        if ((!(unique.includes(e))))
            unique.push(e);
    });
    return unique;
}
var d = ['hari', 'priya', 'hari', 'rajesh', 'priya'];
var unique = [];
console.log("Output 6:", Dup(d));
