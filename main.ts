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
h=undefined;
let arr=[1,5,'abc']
let arrstr:[string,number,boolean]=['raj',1,true]
let multitype:number|string;
multitype=1;
multitype="string"
let obj:{name:string,age:number,amount:number}={
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
        return a.toLowerCase();
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

    class Person {
       private name: string;
        private color:string;
       private  model:number;
        public constructor(name: string,color:string,model:number) {
            this.name = name;
            this.color=color;
            this.model=model;
          }
        
          public getName(): string {
            return this.name;
            // return this.color;
            // return this.model;
          }
        }
      
            
      const person = new Person("Jane","red",13);
   
      
      console.log(person.getName());

const str1:string="haridha"
console.log(str1.split())

var j:string="hihello";
const Count:{[key:string]:number}={}
const str:string[]=j.split('')
str.map((e:string)=>{Count[e]=(Count[e]||0)+1})
console.log("Output 4:",Count)

const ha:{name:string,age:number,std:number,address:string}[]=[{
    name:'hari',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'ram',
    age:18,
    std:12,
    address:'chennai'
},
{
    name:'priya',
    age:17,
    std:11,
    address:'chennai'
},
{
    name:'raj',
    age:16,
    std:10,
    address:'chennai'
}]
const obj1:{[key:string]:{name:string,age:number,std:number,address:string}[]}={}
ha.map(e=>{
    if(!(e.std in obj1)){
        obj1[e.std]=[]
    }    
    obj1[e.std].push(e)
    })
    console.log("Output 5:",obj1);

    function Dup(d:string[]):string[]{
        const remove=d.map((e)=>{
            if((!(unique.includes(e))))
                unique.push(e)
        })
        return unique
        }
      const  d:string[]=['hari','priya','hari','rajesh','priya']
      const  unique:string[]=[]
        console.log("Output 6:",Dup(d));


       