//complete this code
class Animal {
	constructor(species) {
	    this.species = species;
	}
	get(species){
		return this.species;
	}
	makeSound() {
		
	}
}

class Dog extends Animal {
	bark() {
		console.log(`The ${this.species()} makes a sound woof`);
	}

	makeSound() {
		super.makeSound();
		this.bark();
	}
}

class Cat extends Animal {
	purr() {
	    console.log(`The ${this.species()} makes a sound ${this.purr()}`);
	}

	makeSound() {
		super.makeSound();
		this.purr();
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
