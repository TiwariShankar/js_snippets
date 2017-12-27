//why we use object.create > sets prototype reference to parent class

function animal(name){
	this.name = name;
}

var cat = new animal('cat'); // calls object.create and constructor
var dog	= Object.create(animal.prototype); // doesn't call parent constructor

console.log(cat);
console.log(dog);

function husky(name){
	animal.call(this, name);
}

husky.prototype = Object.create(animal.prototype);
var tom = new husky('husky');

console.log(tom);
console.log(tom instanceof animal)