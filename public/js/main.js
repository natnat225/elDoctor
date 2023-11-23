class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
    }
    goTo(lieu) {
        console.log(`${this.nom} va a la ${lieu}`);
    }
    takeCare() {
        if (this.poche !== 'vide') {
            this.etatSante = 'bonne sante';
            console.log(`${this.nom} est en ${this.etatSante}`);
        } else {
            this.etatSante = 'mort';
            console.log(`${this.nom} est ${this.etatSante}`);
        }
    }
    paye(montant) {
        this.argent -= montant;
        console.log(`${this.nom} a paye ${montant} euros`);
    }
}

class Doctor {
    constructor(nom, argent, cabinet) {
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet;
    }
    patientIn(patient) {
        console.log(`${patient.nom} entre dans le cabinet`);
    }
    patientOut(patient) {
        console.log(`${patient.nom} sort du cabinet`);
    }
    diagnostique(patient) {
        let traitement;
        switch (patient.maladie) {
            case 'mal indente':
                traitement = 'ctrl+maj+f';
                break;
            case 'unsave':
                traitement = 'saveOnFocusChange';
                break;
            case '404':
                traitement = 'CheckLinkRelation';
                break;
            case 'azmatique':
                traitement = 'Ventoline';
                break;
            case 'syntaxError':
                traitement = 'f12+doc';
                break;
        }
        patient.poche = traitement;
        patient.paye(50);
        this.argent += 50;
    }
    catMiaou() {
        setInterval(() => console.log("Miaou"), 2000);
    }
}

class Pharmacy {
    constructor() {
        this.argent = 0;
    }
    giveTreatment(patient) {
        let prix;
        switch (patient.poche) {
            case 'ctrl+maj+f':
                prix = 60;
                break;
            case 'saveOnFocusChange':
                prix = 100;
                break;
            case 'CheckLinkRelation':
                prix = 35;
                break;
            case 'Ventoline':
                prix = 40;
                break;
            case 'f12+doc':
                prix = 20;
                break;
        }
        if (patient.argent >= prix) {
            patient.argent -= prix;
            this.argent += prix;
            patient.takeCare();
            console.log(`${patient.nom} a paye ${prix} euros pour le traitement`);
        } else {
            console.log(`${patient.nom} n'a pas assez d'argent pour le traitement`);
            patient.etatSante = 'mort';
            console.log(`${patient.nom} est ${patient.etatSante}`);
        }
    }
}

let marcus = new Patient('Marcus', 'mal indenté', 100, 'vide', 'malade');
let optimus = new Patient('Optimus', 'unsave', 200, 'vide', 'malade');
let sangoku = new Patient('Sangoku', '404', 80, 'vide', 'malade');
let darthVader = new Patient('DarthVader', 'azmatique', 110, 'vide', 'malade');
let semicolon = new Patient('Semicolon', 'syntaxError', 60, 'vide', 'malade');

let debuggerDoctor = new Doctor('abdellah', 0, ['chat']);

let patients = [marcus, optimus, sangoku, darthVader, semicolon];

for (let patient of patients) {
    debuggerDoctor.patientIn(patient);
    debuggerDoctor.diagnostique(patient);
    debuggerDoctor.patientOut(patient);
}

let pharmacy = new Pharmacy();

for (let patient of patients) {
    patient.goTo('pharmacie');
    pharmacy.giveTreatment(patient);
}
debuggerDoctor.catMiaou()
let cimetiere = patients.filter(patient => patient.etatSante === 'mort');
console.log('Personnes dans le cimetiere :');
for (let personne of cimetiere) {
    console.log(personne.nom);
}
