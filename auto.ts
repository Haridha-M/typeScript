
import {Engine} from './engine'
class Auto{
    engine:Engine;
    constructor(  engine:Engine){
    this.engine=engine;
    }
    }
    class Truck extends Auto{                 
    
    constructor( public engine:Engine,public fourbyfour:boolean){
    super(engine);                  
    }
    }
    let en=new Engine(200,'V6')
    let t=new Truck(en,true)
    console.log(t)