/*
IF STATEMENT:

logikos sablonai
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}
 
palyginimo operatoriai:
- visi: >, <, =>, <=, ==, !=, ===, !==
- naudotini: >, <, =>, <=, ===, !==
- nenaudotini: ==, !=, (nes nera tikrinamas reiksmiu tipas)
*/

const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
}

console.log('-------');

const c = 7;
const d = 4;

if (c < d) {
    const cMaziau = `${c} yra maziau uz ${d}`;
    console.log(cMaziau);
} else {
    const cNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cNeMaziau);
}   

console.log('---------');

const e = '8';
const f = 8;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('---------');

const cookiesAgreed = true;

if (cookiesAgreed === false ) {
    console.log('Ismetame cookies sutikimo bloka...1');
}
if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');
}

console.log('---------');

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

console.log('---------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);

console.log('---------');

const akys = 'Rudos';

if (akys === "Melynos") {
    console.log('Oj kokie fainulkos!!!');
} else  if ( akys === 'Zalios') {
    console.log('Sexy');
} else if ( akys === 'Rudos') {
    console.log('Melagis?');
} else if ( akys === 'Pilkos') {
    console.log('Niekuo neypatingi');
} else if ( akys === 'Raudonos') {
    console.log('Programeriai');
} else {
    console.log('A tu turi akis?')
}

if ( akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else  
    if ( akys === 'Zalios') {
    console.log('Sexy');
    } else 
        if ( akys === 'Rudos') {
            console.log('Melagis?');
} else {
    console.log('A tu turi akis?');
}