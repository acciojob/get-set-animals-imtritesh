//complete this code
class Animal {
	constructor(species) {
	    this._species = species;
	}
	get(species){
		return this._species;
	}
	makeSound() {
		bark();
		purr();
	}
}

class Dog extends Animal {
	bark() {
		console.log("woof");
	}

	makeSound() {
		this.bark();
	}
}

class Cat extends Animal {
	purr() {
	    console.log("purr");
	}

	makeSound() {
		this.purr();
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
