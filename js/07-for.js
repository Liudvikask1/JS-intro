const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];
zodis += rytas[abcIndex++];

console.log(zodis);

for (let i = 3; i <= 7; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < abc.length; i++) {
        const raide = abc[i];
        console.log(raide);
}

console.log('----------------------');

const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    sum += pazymys;
}

const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);

console.log('----------------------');


