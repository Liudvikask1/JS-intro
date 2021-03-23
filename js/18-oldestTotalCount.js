/*
Gimines medyje reikia rasti kas buvo/yra vyriausias?
*/

function memberCount(asmuo) {
    let nariukiekis = 1;

    if (asmuo.children) {
        // nariukiekis += asmuo.children.length;
        for (let i = 0; i < asmuo.children.length; i++) {
        const child = asmuo.children[i];
        console.log(child);
        nariukiekis += memberCount (child);
        }
    }

    return nariukiekis;
   
}    

const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]
        },
    ]
}

const kiekNariu = memberCount(gimine1);
console.log(kiekNariu);
