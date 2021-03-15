/*

SWITCH STATEMENT:

switch () {case, break, default}

*/

const animal = 'dog';

switch (animal) {
    case 'dog':
        console.log('Bark, bark');
        break;

    case 'cat':
        console.log('Meow, meow');
        break;

    default:
        console.log('Uknown animal');
        break;
}

console.log('---------');

const day = 1

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('ne darbo diena');
        break;

        default:
            console.log('tokios dienos nera');
}

console.log('----------');

const process = 1;

switch (process) {
    case 1:
        console.log('Paimti puodeli');
        break;
    case 2:
        console.log('Isideti arbatos');
        break;
    case 3:
        console.log('Isideti saldikli');
        break;
    case 4:
        console.log('Ipilti vandens');
        break;
    case 5:
        console.log('Ismaisyti');
        break;
    case 6:
        console.log('Gerti');
        break;
    default:
        console.log('Viskas atlikta');

}