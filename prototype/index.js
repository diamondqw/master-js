function Person(name){
  this.name=name;
}
let person1 = new Person("paawan")
console.log(person1.__proto__ === Person.prototype)
