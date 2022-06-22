const cars = "Audi, Mercedes, BMW, Nissan, Dodge";

const newCars = cars.split(", ");

console.log(newCars);

if (newCars.length >= 3) {
	console.log("Jest OK");
} else {
	console.log("Nie jest OK");
}

newCars.length < 3 ? console.log("Jest OK") : console.log("Nie jest OK");

if (newCars.includes("Audi")) {
	newCars.push("Opel");
} else {
	newCars.pop();
}

console.log(newCars);