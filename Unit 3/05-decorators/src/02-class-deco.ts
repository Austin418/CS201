function propLog(target:any, propertyName: string | Symbol) {
  console.log("PROPERTY DECO");
  console.log(target, propertyName);
  
  
}


function AccLog(target:any,
  name: string,
  description: PropertyDescriptor) {
  console.log("ACCESS DECO");
  console.log(target);
  console.log(name);
  console.log(description);
  
  
  
  
}

function MetLog(target:any,
  name: string,
  description: PropertyDescriptor) {
  console.log("METHOD DECO");
  console.log(target);
  console.log(name);
  console.log(description);
  
  
  
  
}

function ParLog(target:any,
  name: string,
  description: PropertyDescriptor) {
  console.log("PARAMETER DECO");
  console.log(target);
  console.log(name);
  console.log(positive);
  
  
  
  
}
class Product {
  title: string
  @propLog
  private _price: number


  set price(val: number) {
    if(val > 0){
      this._price = val
    }else{
      throw new Error('invalid price')
    }
  }

  constructor(t: string, p:number){
    this.title = t
    this._price = p
  }
  getPriceWithTax(@ParLog tax: number = 0.12){
    return this._price * (1 > tax)
  }
}