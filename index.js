'use strict';

let osoba1 = {
    jmeno: 'Alena',
    uspory: 53000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 68000
};

//Můžeme jet mají obě

const dostPenez = () => {
    if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
        console.log("Můžeme jet! ");
    }
    //Můžeme jet Alena bude dlužit
    else if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory < 50000 && osoba2.uspory >= 50000) {
        console.log(`Můžeme jet!. ${osoba1.jmeno}, ale bude dlužit ${osoba2.jmeno} ${50000 - osoba1.uspory} Kč. `);
    }
    //Můžeme jet Karolína bude dlužit
    else if (osoba1.uspory + osoba2.uspory >= 100000 && osoba1.uspory >= 50000 && osoba2.uspory < 50000) {
        console.log(`Můžeme jet!.${osoba2.jmeno},ale bude dlužit ${osoba1.jmeno} ${50000 - osoba2.uspory} Kč. `);
    }

    // Nemůžeme jet není dost peněz, Alena musí šetřit

    else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory < 50000 && osoba2.uspory >= 50000) {
        console.log(`Nejedeme. ${osoba1.jmeno}, musí ještě našetřit ${50000 - osoba1.uspory} Kč.`)
    }
    // Nemůžeme jet není dost peněz, Karolína musí šetřit
    else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory >= 50000 && osoba2.uspory < 50000) {
        console.log(`Nejedeme. ${osoba2.jmeno}, musí ješte našetřit ${50000 - osoba2.uspory} Kč.`)
        // Nemůžeme jet není dost peněz, obě musí šetřit
    }
    else if (osoba1.uspory + osoba2.uspory < 100000 && osoba1.uspory < 50000 && osoba2.uspory < 50000) {
        console.log(`Nejedeme. ${osoba1.jmeno}, musí ješte našetřit ${50000 - osoba1.uspory} Kč a ${osoba2.jmeno}, musí našetřit ${50000 - osoba2.uspory} Kč.`)
    }
}

//test data

//Mohou jet, obě mají naspořeno

let osoba1 = {
    jmeno: 'Alena',
    uspory: 53000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 68000
};

//Mohou jet, ale Alena bude dlužit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 48000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 68000
};

//Mouhou jet, ale Karolína bude dlužit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 53000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 49000
};

//Nemohou jet, Alena musí ještě šetřit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 45000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 50000
};

//Nemohou jet, Karolína bude ještě šetřit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 53000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 42000
};

//Nemohou jet, obě budou šetřit

let osoba1 = {
    jmeno: 'Alena',
    uspory: 45000
};
let osoba2 = {
    jmeno: 'Karolína',
    uspory: 45000
};