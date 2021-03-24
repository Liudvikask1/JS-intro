// SPREAD

const spread1 = [5, 9, 3];
console.log(spread1);

const spread2 = [...spread1, 7];
console.log(spread2);

const spread3 = [7, ...spread2];
console.log(spread3);

const spread4 = ['asd', 'qwe', 874, true];
console.log(spread4);

const spread5 = [...spread4, ...spread1, spread2[0]];
console.log(spread5);

console.clear()

/********************************************************************/
/********************************************************************/
/********************************************************************/

// REST

const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum / list.length;
}

const ave = average(10, 2, 8, 4, 6);
console.log(ave);


const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metai ir as megstu: ${list.join(', ')}.`;
}

const petras = apieMane('Petras', 55, 'obuolius', 'kriauses', 'pyragus');
console.log(petras);

console.clear()

// primityvios reiksmes

let a = 5;
let b = 999;

b = a;

console.log(a);
console.log(b);

a = 777;

console.log(a);
console.log(b);

console.log('********************************************************************');

// kompleksines reiksmes

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 11111;

console.log(cc);
console.log(dd);

console.clear()


const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0,001];

// const sveikieji = desimtainiai.map (n => Math.round(n))

// desimtainiai.forEach((n, i) => de)

console.log(desimtainiai);


const c = [5, 6];

c[0] = 9;
console.log(c);