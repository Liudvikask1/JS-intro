function pazymiuVidurkis (vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++)
        suma += pazymiai[i];

const average = suma / pazymiai.length;

// Vardenis: pazymiu vidurkis yra 6.
console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

//pazymiuVidurkis ('Petriukas', [10, 2, 8, 4]);
//pazymiuVidurkis ('Maryte', [10, 8, 6, 4]);
//pazymiuVidurkis ('Alphe', [10, 9, 10, 7, 9, 2, 7]);

console.log('--------------------------');

const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryte', [10, 8, 6, 4]],
    ['Alphe', [10, 9, 10, 7, 9, 2, 7]]
];
//console.log(mokykla);

for (let i = 0; i < mokykla.length; i++) {
    console.log('------------');
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    pazymiuVidurkis(name, marks)
}

