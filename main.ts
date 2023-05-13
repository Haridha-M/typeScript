 export{}
 let message="welcome"
console.log(message)
let a:any=123;
a=1;
a="message";
let b:number;
b=3.4;
b=3;
let c:string;
c="uifuwegeg"
let e:boolean;
e=true;
let f:null;
f=null;
let h:undefined;
let arr=[1,5,'abc']
let arrstr:string[]=['raj','pri']
let multitype:number|string;
multitype=1;
multitype="string"
let obj={
    name:"fetfd",
    age:24,
    amount:6000
}
obj.age=24;

function sum(a:number,b:number):number{
return a+b;
}
function s(a){
  return a.toLowercase();
    }
    function s2(a:string,b:string){
        if(b)
            return a.toLowerCase()+b;
        return a.toLocaleLowerCase();
          }
          console.log(s2("HI","hello"));

function add(point:{x:number,y:number}){
return point.x=point.y;
}
let p={  
    x:1,
    y:6
}
console.log(add(p));

interface Point{
    x:number;
    y:number;
    z?:number;
}
function add1(point:Point){
    return point.x=point.y;
    }
    console.log(add1(p))