class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Cześć jestem ${this.name}`);
	}

	showAge() {
		console.log(`Mam ${this.age} lat`);
	}
}

const person3 = new Person2("Adam", 30);

person3.sayHi();
person3.showAge();