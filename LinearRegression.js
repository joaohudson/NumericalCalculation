function dot(x, y){
    if(x.length != y.length)
        return undefined;
    let sum = 0;
    for(let i = 0; i < x.length; i++)
    sum += x[i] * y[i];
    return sum;
}

function scale(x, y){
	if(x.length != y.length)
        return undefined;
    let s = [];
    for(let i = 0; i < x.length; i++)
    s[i] = x[i] * y[i];
    return s;
}

function average(ar){
	let sum = 0;
	for(let i = 0; i < ar.length; i++){
		sum += ar[i];
	}
	return sum / ar.length;
}

function variance(ar){
	let sum = 0;
	const av = average(ar);
	for(let i = 0; i < ar.length; i++){
		sum += (ar[i] - av)**2;
	}
	return sum;
}

//determination coefficient
function dc(x, y, f){
	let error = 0;
	const vari = variance(y);
	
	for(let i = 0; i < y.length; i++){
		error += (y[i] - f(x[i]))**2;
	}
	
	return (vari - error) / vari;
}

//linear regression
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

//quadratic regression
function qr(x, y){
	if(x.length != y.length)
		return undefined;
	
	let one = [];
	for(let i = 0; i < x.length; i++)
		one[i] = 1;

	const x2 = scale(x, x);//x^2
	
	const a11 = x.length;
	const a12 = dot(one, x);
	const a13 = dot(one, x2);
	
	let a21 = dot(x, one);
	let a22 = dot(x, x);
	let a23 = dot(x, x2);
	
	let a31 = dot(x2, one);
	let a32 = dot(x2, x);
	let a33 = dot(x2, x2);
	
	let b1 = dot(one, y);
	let b2 = dot(x, y);
	let b3 = dot(x2, y);
	
	const m1 = a21 / a11;
	const m2 = a31 / a11;
	
	a21 = a21 - a11*m1;
	a22 = a22 - a12*m1;
	a23 = a23 - a13*m1;
	b2 = b2 - b1*m1;
	
	a31 = a31 - a11*m2;
	a32 = a32 - a12*m2;
	a33 = a33 - a13*m2;
	b3 = b3 - b1*m2;
	
	const m3 = a32 / a22;
	
	a31 = a31 - a21*m3;
	a32 = a32 - a22*m3;
	a33 = a33 - a23*m3;
	b3 = b3 - b2*m3;
	
	const zr = b3 / a33;
	const yr = (b2 - zr*a23) / a22;
	const xr = (b1 - yr*a12 - zr*a13) / a11;
	
	return [xr, yr, zr];
}


x = [1, 2, 3];
y = [1 * 8 + 3, 2 * 8 + 3, 3 * 8 + 3];

lr(x, y)