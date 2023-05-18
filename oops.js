"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Car {
//     model;
//     color;
//     isElectric;
//     constructor(model, color, isElectric) {
//       this.model = model;
//       this.color = color;
//       this.isElectric = isElectric;
//     }
//     drive() {
//       const engineStarted = this.startEngine();
//       // some method to drive after starting the engine
//     }
//     startEngine() {
//       // some method to start the engine
//       return true;
//     }
//   }
//   abstract class Character {
//     public name: string;
//     public damage: number;
//     public attackSpeed: number;
//     constructor(name: string, damage: number, speed: number) {
//       this.name = name;
//       this.damage = damage;
//       this.attackSpeed = speed;
//     }
//     public abstract damagePerSecond(): number;
//   }
//   class Goblin extends Character {
//     constructor(name: string, damage: number, speed: number) {
//       super(name, damage, speed);
//     }
//     public damagePerSecond(): number {
//       return this.damage * this.attackSpeed;
//     }
//   }
//   class Character {
//     public name: string;
//     public damage: number;
//     constructor(name: string, damage: number) {
//       this.name = name;
//       this.damage = damage;
//     }
//     public talk(): void {
//       console.log('Says something ...');
//     }
//     public attack(): void {
//       console.log(`Attacks his target with his fists.`);
//     }
//   }
//   class Orc extends Character {
//     public weapon: string;
//     constructor(name: string, damage: number, weapon: string) {
//       super(name, damage);
//       this.weapon = weapon;
//     }
//     public talk(): void {
//       console.log('Says something but in orcish ...');
//     }
//     public attack(): void {
//       console.log(`Attacks his target with his ${this.weapon}.`);
//     }
//   }
//   //
//   class Greater{
//     greeting:string;
//     constructor(message:string){
//         this.greeting=message;
//     }
//     great(){
//         return "hello "+this.greeting;
//   }
// }
// const Greaters=new Greater("Hari")
// console.log(Greaters.great())
//   class car{
//     engine:string;//field // default public
//     constructor(engine:string){//constructor
//         this.engine=engine;
//     }
//     start(){
//         return "Started "+this.engine;
//     }
//     stop(){
//         return "stoped "+this.engine;
//     }
//   }
//   const mycar= new car("adi")
//   console.log(mycar.start())
//   console.log(mycar.stop())
// // shorthand way to declare a field
//   class car{
//     constructor(public engine:string){}
//   }
//   const mycar= new car("adi")
//   console.log(mycar)
//   class car{
//    private _engine:string;//field // default public
//     constructor(engine:string){//constructor
//         console.log("hi")
//         this.engine=engine;
//         console.log(this.engine)
//         // console.log("ferrari")
//     }
//     get engine():string{
//         return this._engine;     //Properties acta as filters and can have get or set blocks
//     }
//     set engine(value:string){
//         if(value==undefined) throw 'Supply an Engine!';
//         this._engine=value
//     }
// }
// const mycar= new car("adi")
// console.log(mycar)
// console.log(mycar.engine)
// console.log(mycar.engine="benz")
// class Engine{
// // hp:number;
// // type:string;
// constructor( public hp:number,public type:string){
// // this.hp=hp;
// // this.type=type;    
// }
// }
// class Auto{
// // engine:Engine;
// constructor( public engine:Engine){
// // this.engine=engine;
// }
// }
// class Truck extends Auto{                 //truck derives from auto
// // fourbyfour:boolean;
// constructor( public engine:Engine,public fourbyfour:boolean){
// super(engine);                    //call base class constructor
// // this.fourbyfour=fourbyfour
// }
// }
// let en=new Engine(200,'V6')
// let t=new Truck(en,true)
// console.log(t)
// interface Action{
// start(message:string);
// stop(message:string);
// }
// class Car implements Action{
// constructor(public engine:string){
// this.engine=engine;
// }
// start(message:string){
// console.log(this.engine+message);
// }
// stop(message:string){
// console.log(this.engine+message);
// }
// }
// var pn=new Car('V6')
// pn.start('started')
// pn.stop(' stoped')
// //enum
// enum direction{
//     north=1,
//     south,
//     west,
//     east
// }
// console.log(direction)
var c = { name: 'ramu', age: 20 };
var myfun = function (obj) {
    return __assign(__assign({}, obj), { greet: 'hi', hs: 5 });
    //    return obj['hi']='greet'
};
var b = myfun(c);
console.log(b.name);
