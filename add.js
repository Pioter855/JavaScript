let score;

const add = (x, y) => {
	score = x + y;

	const fun1 = () => {
		console.log(`Liczba ${score} jest parzysta`);
	};

	const fun2 = () => {
		console.log(`Liczba ${score} jest nie parzysta`);
	};

	if (score % 2 == 0) {
		fun1();
	} else {
		fun2();
	}
};

add();