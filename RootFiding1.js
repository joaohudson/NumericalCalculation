//método da bisseção
function mb(f, a, b){
	const limit = 200;
	let med = (a + b) * 0.5;
	
	if(f(a) * f(b) > 0)
		return undefined;
	
	for(let i = 0; i < limit; i++){
		med = (a + b) * 0.5;
		
		if(f(a) * f(b) == 0){
			med = f(a) == 0 ? a : b;
			break;
		}
		else if(f(a) * f(med) < 0){
			b = med;
		}
		else if(f(b) * f(med) < 0){
			a = med;
		}
	}
	
	return med;
}
//método da falsa posição
function mfp(f, a, b){
	const limit = 100;
	let med = a;
	
	if(f(a) * f(b) > 0)
		return undefined;
	
	for(let i = 0; i < limit; i++){
		med = (a*f(b) - b*f(a)) / (f(b) - f(a));
		
		if(f(a) * f(b) == 0){
			med = f(a) == 0 ? a : b;
			break;
		}
		else if(f(a) * f(med) < 0){
			b = med;
		}
		else if(f(b) * f(med) < 0){
			a = med;
		}
	}
	
	return med;
}

var f = (x) => 2*x + 3;

ne(f, -8, 8);