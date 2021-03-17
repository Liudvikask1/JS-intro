function daugyba (a, b) {
    // parametru validacija
    // jeigu a yra ne skaicius, grazinti klaidos pranesima
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus formato';
    }
    if (isNaN(a) || (a === Infinity) || (a === -Infinity)) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    }

    // jeigu b yra ne skaicius, grazinti klaidos pranesima
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus formato';
    }

    if (isNaN(b) || (b === Infinity) || (b === -Infinity)) {
        return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
    }

    const rez = a * b;
    // logika

        return rez;
        //rezultato grazinimas
}

console.log(daugyba('trys', 'penki'));
console.log(daugyba(3, 'penki'));
console.log(daugyba('trys', 5));

console.log(daugyba(true, false));
console.log(daugyba(3, false));
console.log(daugyba(false, 3));

console.log(daugyba(['asd', 786], 3));
console.log(daugyba(3, ['asd', 786]));
console.log(daugyba(['asd'], ['asd']));

console.log(daugyba([2], 3));
console.log(daugyba(3, [2]));
console.log(daugyba([2], [3]));

console.log(daugyba(NaN, 3));
console.log(daugyba(3, NaN));
console.log(daugyba(NaN, NaN));

console.log(daugyba(Infinity, 3));
console.log(daugyba(3, Infinity));
console.log(daugyba(Infinity, Infinity));



