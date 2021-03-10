console.log(84555);
console.log("Labas");
console.log('rytas');
console.log('Lietuva');
console.log('Mano vardas yra');

let vardas = 'Liudvikas';
console.log(vardas);

vardas = 'Jonas';
console.log(vardas);

const pasisveikinimas = 'Labas rytas, Lietuva!';
console.log(pasisveikinimas);

const pirmasSkaicius = 7;
const antrasSkaicius = 77;
const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText = pirmasSkaicius + '+' + antrasSkaicius + '=' + suma;
console.log(mathText);

const petrasNname = 'Petras';
const age = 99;

// Petras age is 99.
const petrasAge = petrasNname + ' age is ' + age  + '.';
console.log(petrasAge);

// sarašas (array)
const pazymiai = [5, 7, 8];
console.log(pazymiai);

const pirmasPazymys = pazymiai [0]
console.log(pirmasPazymys);

const antrasPazymys = pazymiai [1]
console.log(antrasPazymys);

const pazymiuSuma = pazymiai [0] + pazymiai [1] + pazymiai [2] 
console.log(pazymiuSuma);

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;
console.log(pazymiuVidurkis);

console.log('--------------------');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

// Is mums zinomos 6 raidziu abeceles paskutine yra "f".
const abcIlgis = abc.length;
console.log(abcIlgis);
const paskutinesRaidesPozicija = abc.length - 1;
const paskutineRaide = abc[paskutinesRaidesPozicija];

const abcAtsakymas = 'Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra "' + paskutineRaide + '".';
console.log(abcAtsakymas);






