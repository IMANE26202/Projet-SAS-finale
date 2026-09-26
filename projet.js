           /* Gestion des élections et Listes électorales au Maroc  */

const p = require('prompt-sync') ();
let choix;
let n;
let candidats = []


function AjouterCandidat() {
    
    n = Number(p(" ajouter un candidat : "));
    

        let cin = p("Entrer votre CIN :");
        let nom = p("Entrer votre Nom : ");
        let prenom = p ("Entrer votre Prénom :");
        let partiPolitique = p ("Entrer votre partiPolitique :");
        let age = Number(p("Entrer votre age :"));
        let electeurs =[]
       console.log(` =============================== \n`)


       candidats.push({
         cin : cin,
         nom :nom,
         prenom :prenom,
         partiPolitique :partiPolitique,
         age:age,
         electeurs:electeurs

       })

}
function AjouterPlusieurCandidatsAlafois() {
    
    n = Number(p("combien de candidats tu veux ajouter : "));
    for (let i = 0; i < n; i++) {
       console.log(`\n ======= candidate ${i+1} =========== \n`)

        let cin = p("Entrer votre CIN :");
        let nom = p("Entrer votre Nom : ");
        let prenom = p ("Entrer votre Prénom :");
        let partiPolitique = p ("Entrer votre partiPolitique :");
        let age = Number(p("Entrer votre age :"));
        let electeurs =[]
       console.log(` =============================== \n`)


       candidats.push({
         cin : cin,
         nom :nom,
         prenom :prenom,
         partiPolitique :partiPolitique,
         age:age,
         electeurs:electeurs

       })
    
    
    }

}
    
function AfficherListeCandidats (candidats) {

        console.log("1.Afficher les candidats par ordre décroissant  ");
        console.log("2.Afficher uniquement les candidats d'un parti politique spécifique ");
        let choix = Number(p("enter a number :"));

        switch (choix) {
            case 1:
                    for(let i = 0; i < candidats.length - 1; i++){
                         for(let j = 0; j < candidats.length -1 - i ; j++){
                            if ( candidats[j].electeurs.length < candidats[j+1].electeurs.length){
                                 let temp = candidats[j];
                                 candidats [j] = candidats [j+1];
                                 candidats[j+1] = temp;
                            }
                        }
                    }
                     console.log("\n---Candidats trié par ordre décroissant de vote---");
                    for (let i = 0; i < candidats.length; i++) {
                             console.log('CIN : ',candidats[i].cin);
                             console.log('Nom : ',candidats[i].nom);
                             console.log('Prenom : ',candidats[i].prenom);
                             console.log('PartiPolitique  :',candidats[i].partiPolitique);
                             console.log('Age :',candidats[i].age);
                             console.log('Electeurs : ',candidats[i].electeurs);
                             console.log(` =============================== \n`)
                        }
                         break;
            case 2:
               let partiPolitique = p(" Entrer votre parti Politique:")
                 console.log("\n---Candidats Filtrer par parti politique spécifique---");

              for(i=0; i < candidats.length; i++){ 
                    if(partiPolitique === candidats[i].partiPolitique){
    
                    for (let i = 0; i < candidats.length; i++) {
                             console.log('CIN : ',candidats[i].cin);
                             console.log('Nom : ',candidats[i].nom);
                             console.log('Prenom : ',candidats[i].prenom);
                             console.log('PartiPolitique  :',candidats[i].partiPolitique);
                             console.log('Age :',candidats[i].age); 
                             console.log('Nombre de vote',candidats[i].electeurs.length)
                             console.log(` =============================== \n`)
                    }
                    }

             }  
            }
        }
function VoterPourUnCandidat  ()  {
         
} 

    
do {

    console.log("\n ===================================\n")
    console.log ("1.ajouter un nouveau candidat");
    console.log ("2.ajouter plusieurs candidat à la fois");
    console.log ("3.afficher la liste des candidats");
    console.log ("4.voter pour un candidat");
    console.log ("5.modifier les information d'un candidat");
    console.log ("6.supprimer un candidat");
    console.log ("7.rechercher des candidats");
    console.log("\n________________________________________\n")


    choix = Number(p("entrer votre choix : "));
switch (choix) { 
    case 1 :
        AjouterCandidat() 
        break;
     case 2 :
        AjouterPlusieurCandidatsAlafois()
        break;
     case 3 :
        AfficherListeCandidats(candidats)
        break;
     case 4 :
        console.log("voter pour un candidat.") ;
        break;
     case 5 :
        console.log("modifier les informations des candidat.") ;
        break;
     case 6 :
        console.log("supprimer un candidat.") ;
        break;  
     case 7 :
        console.log("rechercher des candidats.") ;
        break;
    default :
            if(choix !== 0 || choix > 7){
                 console.log("choix incorrect. veuiller enter 1, 2, 3, 4, 5, 6, 7.");

            }
        break;
}
 } while (choix !== 0){

 }
 
