/* Gestion des élections et Listes électorales au Maroc  */

let candidats = [
    {
        cin: "AA123",
        nom: "Alami",
        prenom: "Ahmed",
        partiPolitique: "Parti A",
        age: 35,
        electeurs: ["E001", "E002", "E003"]
    },
    {
        cin: "BB456",
        nom: "Bennani",
        prenom: "Sara",
        partiPolitique: "Parti B",
        age: 42,
        electeurs: ["E004", "E005"]
    },
    {
        cin: "CC789",
        nom: "Chakir",
        prenom: "Youssef",
        partiPolitique: "Parti C",
        age: 38,
        electeurs: ["E006", "E007", "E008", "E009"]
    },
    {
        cin: "DD012",
        nom: "Idrissi",
        prenom: "Salma",
        partiPolitique: "Parti D",
        age: 29,
        electeurs: ["E010", "E011"]
    }
];

const p = require('prompt-sync')();
let choix;
let n;



function AjouterCandidat() {

    let cin = p("Entrer votre CIN :");
    for(i=0; i<candidats.length; i++){
        if(cin == candidats[i].cin){
            console.log("Vous ne pouvez pas ajouter ce candidat car il est dèja exister")
            return;
        }
        
    }
         
    let nom = p("Entrer votre Nom : ");
    let prenom = p("Entrer votre Prénom :");
    let partiPolitique = p("Entrer votre partiPolitique :");
    let age = Number(p("Entrer votre age :"));
    let electeurs = []
    console.log(` =============================== \n`)


    candidats.push({
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: electeurs

    })

}
function AjouterPlusieurCandidatsAlafois() {

    n = Number(p("combien de candidats tu veux ajouter : "));
      for (let i = 0; i < n; i++) {
        console.log(`\n ======= candidate ${i + 1} =========== \n`)

        let cin = p("Entrer votre CIN :");
        let nom = p("Entrer votre Nom : ");
        let prenom = p("Entrer votre Prénom :");
        let partiPolitique = p("Entrer votre partiPolitique :");
        let age = Number(p("Entrer votre age :"));
        let electeurs = []
        console.log(` =============================== \n`)


        candidats.push({
            cin: cin,
            nom: nom,
            prenom: prenom,
            partiPolitique: partiPolitique,
            age: age,
            electeurs: electeurs

        })


    }

}

function AfficherListeCandidats(candidats) {

    console.log("1.Afficher les candidats par ordre décroissant  ");
    console.log("2.Afficher uniquement les candidats d'un parti politique spécifique ");
    let choix = Number(p("enter a number :"));

    switch (choix) {
        case 1:
            for (let i = 0; i < candidats.length - 1; i++) {
                for (let j = 0; j < candidats.length - 1 - i; j++) {
                    if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                        let temp = candidats[j];
                        candidats[j] = candidats[j + 1];
                        candidats[j + 1] = temp;
                    }
                }
            }
            console.log("\n---Candidats trié par ordre décroissant de vote---");
            for (let i = 0; i < candidats.length; i++) {
                console.log('CIN : ', candidats[i].cin);
                console.log('Nom : ', candidats[i].nom);
                console.log('Prenom : ', candidats[i].prenom);
                console.log('PartiPolitique  :', candidats[i].partiPolitique);
                console.log('Age :', candidats[i].age);
                console.log('Electeurs : ', candidats[i].electeurs);
                console.log(` =============================== \n`)
            }
            break;
        case 2:
            let parti_Politique = p(" Entrer votre parti Politique:")
            console.log("\n---Candidats Filtrer par parti politique spécifique---");

            for (let i = 0; i < candidats.length; i++) {
                if (parti_Politique == candidats[i].partiPolitique) {

                        console.log('CIN : ', candidats[i].cin);
                        console.log('Nom : ', candidats[i].nom);
                        console.log('Prenom : ', candidats[i].prenom);
                        console.log('PartiPolitique  :', candidats[i].partiPolitique);
                        console.log('Age :', candidats[i].age);
                        console.log('Nombre de vote', candidats[i].electeurs.length)
                        console.log(` =============================== \n`)
                    }
                

            }
    }
}
function VoterPourUnCandidat() {

    let alreadyVote = false
    let cinElecteur = p("Veuillez saisir votre CIN : ");

    for (let i = 0; i < candidats.length; i++) {

        let electeurs = candidats[i].electeurs;
        for (let j = 0; j < electeurs.length; j++) {
            if (electeurs[j] == cinElecteur) {
                alreadyVote = true;
                console.log("Vous avez déjà voté et vous navez pas le droit de modifier votre vote ni de voter à nouveau ")
                return;

              }

            }

        }


        let cinCandidat = p("Veuillez saisir le CIN du candidat : ");
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin == cinCandidat) {
                candidats[i].electeurs.push(cinElecteur)

                console.log("Votre vote a été enregistré avec succès.");
                return;
            }
        }
        console.log("Candidat introuvable.");

    
}



function ModifierLesinformationsCandidats() {
    let cin = p("Veuiller saisir votre CIN: ");

    let trouve = false

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {

            let nouveauParti = p("Veuiller entrer votre nouvelle parti politique: ");
            let nouveauAge = p("Veuiller entrer votre nouveau age: ");

            candidats[i].partiPolitique = nouveauParti
            candidats[i].age = nouveauAge
            
            
            trouve = true
            console.log("Modification effectuer avec succes.")
            console.log("candidat après modification: ")
            console.log(candidats[i])

        }

    }
    if (!trouve) {
        console.log("Cette CIN n'existe pas.")
        return;
    }

}
function SupprimerUnCandidat() {
    let cin = p("Veuiller entrer votre CIN:");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {
            candidats.splice(i, 1)
            trouve = true
            console.log("Le candidat a été supprimé avec succès." );
            break;      

        }
    }
    if (!trouve) {
        console.log("Cette CIN n'existe pas.")
    }
}
function RechercherDesCandidats() {
    let nom = p("Veuiller entrer le nom du candidat: ");
    let trouve = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase() == nom.toLowerCase()) {
            console.log(candidats[i])
            trouve = true
        }
    }

  
    if (!trouve) {
        console.log("Ce candidats est introuvable.")
    }
}

do {

    console.log("\n ===================================\n")
    console.log("1.ajouter un nouveau candidat");
    console.log("2.ajouter plusieurs candidat à la fois");
    console.log("3.afficher la liste des candidats");
    console.log("4.voter pour un candidat");
    console.log("5.modifier les information d'un candidat");
    console.log("6.supprimer un candidat");
    console.log("7.rechercher des candidats");
    console.log("\n________________________________________\n")


    choix = Number(p("entrer votre choix : "));
    switch (choix) {
        case 1:
            AjouterCandidat()
            break;
        case 2:
            AjouterPlusieurCandidatsAlafois()
            break;
        case 3:
            AfficherListeCandidats(candidats)
            break;
        case 4:
            VoterPourUnCandidat()
            break;
        case 5:
            ModifierLesinformationsCandidats()
            break;
        case 6:
            SupprimerUnCandidat()
            break;
        case 7:
            RechercherDesCandidats()
            break;
        default:
            if (choix !== 0 || choix > 7) {
                console.log("choix incorrect. veuiller enter 1, 2, 3, 4, 5, 6, 7.");

            }
            break;
    }
} while (choix !== 0) {

}

