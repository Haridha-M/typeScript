"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    Car.prototype.drive = function () {
        var engineStarted = this.startEngine();
        // some method to drive after starting the engine
    };
    Car.prototype.startEngine = function () {
        // some method to start the engine
        return true;
    };
    return Car;
}());
var Character = /** @class */ (function () {
    function Character(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
    return Character;
}());
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin(name, damage, speed) {
        return _super.call(this, name, damage, speed) || this;
    }
    Goblin.prototype.damagePerSecond = function () {
        return this.damage * this.attackSpeed;
    };
    return Goblin;
}(Character));
var Character = /** @class */ (function () {
    function Character(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    Character.prototype.talk = function () {
        console.log('Says something ...');
    };
    Character.prototype.attack = function () {
        console.log("Attacks his target with his fists.");
    };
    return Character;
}());
var Orc = /** @class */ (function (_super) {
    __extends(Orc, _super);
    function Orc(name, damage, weapon) {
        var _this = _super.call(this, name, damage) || this;
        _this.weapon = weapon;
        return _this;
    }
    Orc.prototype.talk = function () {
        console.log('Says something but in orcish ...');
    };
    Orc.prototype.attack = function () {
        console.log("Attacks his target with his ".concat(this.weapon, "."));
    };
    return Orc;
}(Character));
//
var Greater = /** @class */ (function () {
    function Greater(message) {
        this.greeting = message;
    }
    Greater.prototype.great = function () {
        return "hello " + this.greeting;
    };
    return Greater;
}());
var Greaters = new Greater("Hari");
console.log(Greaters.great());
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.start = function () {
        return "Started " + this.engine;
    };
    car.prototype.stop = function () {
        return "stoped " + this.engine;
    };
    return car;
}());
var mycar = new car("adi");
console.log(mycar.start());
console.log(mycar.stop());
// shorthand way to declare a field
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    return car;
}());
var mycar = new car("adi");
console.log(mycar);
var car = /** @class */ (function () {
    function car(engine) {
        console.log("hi");
        this.engine = engine;
        console.log(this.engine);
        // console.log("ferrari")
    }
    Object.defineProperty(car.prototype, "engine", {
        get: function () {
            return this._engine; //Properties acta as filters and can have get or set blocks
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply an Engine!';
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var mycar = new car("adi");
console.log(mycar);
console.log(mycar.engine);
console.log(mycar.engine = "benz");
var Engine = /** @class */ (function () {
    // hp:number;
    // type:string;
    function Engine(hp, type) {
        this.hp = hp;
        this.type = type;
        // this.hp=hp;
        // this.type=type;    
    }
    return Engine;
}());
var Auto = /** @class */ (function () {
    // engine:Engine;
    function Auto(engine) {
        this.engine = engine;
        // this.engine=engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // fourbyfour:boolean;
    function Truck(engine, fourbyfour) {
        var _this = _super.call(this, engine) || this;
        _this.engine = engine;
        _this.fourbyfour = fourbyfour;
        return _this;
        // this.fourbyfour=fourbyfour
    }
    return Truck;
}(Auto));
var en = new Engine(200, 'V6');
var t = new Truck(en, true);
console.log(t);
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    Car.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    Car.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return Car;
}());
var pn = new Car('V6');
pn.start('started');
pn.stop(' stoped');
