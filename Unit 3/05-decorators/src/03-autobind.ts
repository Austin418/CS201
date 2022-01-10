function autobind(_:any, _2:string, descriptor:PropertyDescriptor){
  console.log(descriptor);
  
  const originalMethod = descriptor.value;
  console.log(originalMethod);
  
  const addDescriptor: PropertyDescriptor = {
    
  }
}

class Printer {
  message = 'this works'

  showMessage() {
    console.log(this.message);
    
  }
}


const p = new Printer()
p.showMessage()

const buttonEl = document.querySelector(button)!
buttonEl.addEventListener("click", p.showMessage)