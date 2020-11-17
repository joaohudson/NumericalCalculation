function integrate(f, a, b){
	const m = (a + b) * 0.5;
	const h = (b - a) * 0.5;

	return (f(a) + f(m) * 4.0 + f(b)) * h / 3.0;
}