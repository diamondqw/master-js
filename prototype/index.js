function Person(name){
  this.name=name;
}
let person1 = new Person("paawan")
console.log(person1.__proto__ === Person.prototype)

//protoype inheritance 

Person.prototype.greet=function(){
  return `hi ${this.name}`
}
console.log(person1.greet)
