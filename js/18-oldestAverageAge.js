/*
Gimines medyje reikia rasti kas buvo/yra vyriausias?
*/

function AverageAge(asmuo) {

    let childCount = 1;
    let childAgeSum = asmuo.age; 
   
    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childInfo = AverageAge(child);

                childCount += childInfo.childCount;
                childAgeSum += childInfo.ageSum;

        }
    }

    return  {
        childCount: childCount,
        ageSum: childAgeSum
    };
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
            children: []
        },
    ]
}

const giminesDuomenys = AverageAge(gimine1)
    let average = giminesDuomenys.ageSum / giminesDuomenys.childCount
console.log(average);