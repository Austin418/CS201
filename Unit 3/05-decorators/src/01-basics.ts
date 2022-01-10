
// function Logger (constructor: Function) {
//   console.log('constructor');
// }

//! decorator Factory
function Logger(toLog: string) {
  console.log('Logger Factory');
  return function (constructor: Function) {
    console.log(tolog);
    console.log(constructor);
    
    
  }
}

function Logger(constructor: Function) {
  console.log('this works');
  
}

function WithTemplate(template: string, hookID:string){
  console.log("TEMPLATE FACTORY");
  
  return function(_: Function) {
    const hookEl = document.getElementById(hookID)
    const p = new Person()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector("h1")!.textContent = p.name
    }
  }
}


@Logger("creating person decorator")
@WithTemplate("<h1> PERSON CLASS PLACEHOLDER</h1>", "app")
class Person {
  name = "Max"

  constructor() {
    console.log("created person onject");
    
  }
}

const max = new Person()

console.log(max);
