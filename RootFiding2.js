//método de newton haphson
function mnr(f, df, x){
	const limit = 20;
	const tol = 1.0e-7;
	
	for(let i = 0; i < limit; i++){
		x = x - (f(x) / df(x));
		
		if(Math.abs(f(x)) < tol)
			break;
	}
	
	return x;
}

//método das secantes
function ms(f, a, b){
	const limit = 100;
	const tol = 1e-7;
	let med = a;
	
	for(let i = 0; i < limit; i++){
		med = (a*f(b) - b*f(a)) / (f(b) - f(a));
		
		if(med < tol)
			break;
		
		a = b;
		b = med;
	}
	
	return med;
}

var f = (x) => 2*x;
var df = (x) => 2;

mnr(f, df, 8);