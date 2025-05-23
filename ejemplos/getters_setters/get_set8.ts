class Car { 
 
  //Regular Property 
  //Also known as backing Property to color getter & setter property
  private _color:string="blue"
  
  // Accessor Property with the name color
  get color() {                    //getter
      return this._color; 
  }
 
  set color(value) {               //setter
      this._color=value; 
  }    
};
 
let car = new Car()
 
//Using the getter method
console.log(car.color);  //blue  
 
