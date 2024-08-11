#!/usr/bin/env node

/**
 *  Call will be applied to the object with 
 *  parameter or argument as sperated by , 
 * 
 *  Apply will be same as call just parameter or 
 *  arguments will be as type of array
 * 
 *  Bind is same as call but returns the 
 *  collable function which then can take 
 *  arguments 
 */

function printAge(weight, height) {
    console.log(this.age, weight, height);
  }
  
  let ankit = {
    name: 'ankit',
    age: 22
  };
  
  let kashyap = {
    name: 'kashyap',
    age: 20
  };
  
  // Using call to invoke printAge with 'ankit' as 'this' and arguments 55 and 170
  printAge.call(ankit, 55, 170);
  
  // Using apply to invoke printAge with 'kashyap' as 'this' and arguments [55, 70]
  printAge.apply(kashyap, [55, 70]);
  
  // Using bind to create a new function with 'ankit' as 'this', and then calling it with arguments 55 and 170
  let callable = printAge.bind(ankit);
  callable(55, 170);

  /**
   * Polly fill Call 
   */

  console.log("PolyFill Results ")
  Function.prototype.myCall = function(context,...arg){
    context.myFun = this;
    context.myFun(...arg) 
  }

  printAge.myCall(ankit, 55, 170);

  /**
   *  Polly fill apply
   */

  Function.prototype.myApply = function(context,arg ){
    context.myFun = this;
    context.myFun(...arg)
  }

  printAge.myApply(kashyap, [55, 70]);

  /**
   *  Polly Fill Bind
   */

  Function.prototype.myBind = function(context){
    context.myFun = this;
    return function(...arg){
        context.myFun(...arg);
    }
  }
  let myCollable = printAge.myBind(ankit);
  myCollable(55, 170);