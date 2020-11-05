function dot(x, y){
    if(x.length != y.length)
        return undefined;
    let sum = 0;
    for(let i = 0; i < x.length; i++)
    sum += x[i] * y[i];
    return sum;
}

function lr(x, y){
	if(x.length != y.length)
		return undefined;
	
	let one = [];
	for(let i = 0; i < x.length; i++)
		one[i] = 1;

	const a11 = x.length;
	const a12 = dot(one, x);
	let a21 = dot(one, x);
	let a22 = dot(x, x);
	let b1 = dot(one, y);
	let b2 = dot(x, y);
	
	const m = a21 / a11;
	
	a21 = a21 - a11* m;
	a22 = a22 - a12*m;
	b2 = b2 - b1*m;
	
	const yr = b2 / a22;
	const xr = (b1 - yr * a12) / a11;
	
	return [xr, yr];
}

x = [1, 2, 3];
y = [1, 2, 3];

lr(x, y)