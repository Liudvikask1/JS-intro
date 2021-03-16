/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)
ATS:
Intervale nuo 0 iki 4 suma yra 10.

0 - 4      = 10
-50 - 50   = 0
0 - 100    = 5050
574 - 815  = labai didelis skaicius (168069)
-70 - 30   = santykinai didelis neigiamas skaicius (-40)
0 - 0      = 0

*/

const nuo = 574;
const iki = 815;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
    suma += i;
    }
} else {
    for (let iki = iki; iki <= nuo; i++) {
        suma += i;
    }
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`; 

console.log(ats);

console.log('------------------------');

