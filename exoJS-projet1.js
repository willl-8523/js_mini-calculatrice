// *************************** PROJET1 FAIRE UNE MINI CALCULATRICE ***********************************

// let resultat;

// function Addition(nb1, nb2) {
//     resultat = nb1 + nb2;
//     return resultat;
// }

// function Soustraction(nb1, nb2) {
//      resultat = nb1 - nb2;
//     return resultat;
// }

// function Multiplication(nb1, nb2) {
//     resultat = nb1 * nb2;
//     return resultat;
// }

// function Division(nb1, nb2) {
//     resultat = nb1 / nb2;
//     return resultat;
// }

// let choixOperation;

// try {

//     do {
//         choixOperation = prompt("Saisissez un choix d'opération sur la liste: \n\n1- Addition\n2- Multiplication\n3- Soustraction\n4- Division\n\n");
//         choixOperation = parseInt(choixOperation);
//     } while ((choixOperation < 1 || choixOperation > 4) || isNaN(choixOperation));

//     let nombre1;
//     let nombre2;

//     do {
//         nombre1 = prompt("Veuillez saisir le premier nombre réel");
//         nombre1 = Number(nombre1);
//     }while (isNaN(nombre1))
//     do{
//         nombre2 = prompt("Veuillez saisir le deuxieme nombre réel");
//         nombre2 = Number(nombre2);
//     }while(isNaN(nombre2))
//     // let resultat;

//     switch (choixOperation) {

//         case 1:
//             //alert("Voici le résultat: " + Addition(nombre1, nombre2));
//             Addition(nombre1, nombre2)
//             break;
//         case 2:
//             //alert("Voici le résultat: " + Multiplication(nombre1, nombre2));
//             Multiplication(nombre1, nombre2)
//             break;
//         case 3:
//             //alert("Voici le résultat: " + Soustraction(nombre1, nombre2));
//             Soustraction(nombre1, nombre2)
//             break;
//         case 4:
//             try {
//                 if (nombre2 != 0) {
//                     // alert("Voici le résultat: " + Division(nombre1, nombre2));
//                     Division(nombre1, nombre2);
//                 }
//                 else{
//                     throw new Error("Votre deuxième nombre doit être different de 0");
//                 }
//             } catch (error) {
//                 alert(error);
//             }
//             break;

//         default:
//              throw new Error("Vous ne pouvez choisir que les opérations de la liste");
//             break;
//         }

//         if(!isNaN(resultat)){
//             alert("Voici le résultat: " + resultat);
//         }
// } catch (error) {
//     alert(error);
// }

// let choix;
// let premierNombre;
// let deuxiemeNombre;
// let resultat;

// do {

//     do{
//         choix = parseInt(prompt("Que souhaitez vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
//     }while((choix < 1 || choix > 4) || isNaN(choix));

//     do{
//         premierNombre = Number(prompt("Veuillez saisir votre 1er nombre (nombre réél) : "));
//         deuxiemeNombre = Number(prompt("Veuillez saisir votre 2e nombre (nombre réél) : "));
//     }while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

//     function Addition(nombre1, nombre2){
//         resultat = nombre1 + nombre2;
//         return resultat;
//     }
//     function Multiplication(nombre1, nombre2){
//         resultat = nombre1 * nombre2;
//         return resultat;
//     }
//     function Soustraction(nombre1, nombre2){
//         resultat = nombre1 - nombre2;
//         return resultat;
//     }
//     function Division(nombre1, nombre2){

//         if(nombre2 == 0){
//                 throw new Error("Impossible de diviser un nombre par 0");
//         }
//         else{
//             resultat = nombre1 / nombre2;
//             return resultat;
//         }
//     }

//     try {
//         switch (choix) {
//             case 1:
//                 Addition(premierNombre, deuxiemeNombre);
//                 break;
//             case 2:
//                 Multiplication(premierNombre, deuxiemeNombre);
//                 break;
//             case 3:
//                 Soustraction(premierNombre, deuxiemeNombre);
//                 break;
//             case 4:
//                 Division(premierNombre, deuxiemeNombre);
//                 break;
//             default:
//                 throw new Error("Faire un choix parmi ceux proposé");
//                 break;
//             }

//         alert("Le résultat de votre calcul est: " +resultat);

//     } catch (error) {
//         alert(error);
//     }
// } while(confirm("Souhaitez-vous refaire un calcul ?"));

// *********************************** CORRECTION PROJET1 MINI-CALCULATRICE ********************************

let premierNombre;
let deuxiemeNombre;
let choix;
let resultat;
let restart = false;

do {

    function Addition(nombre1, nombre2){
        return nombre1 + nombre2;
    }
    function Multiplication(nombre1, nombre2){
        return nombre1 * nombre2;
    }
    function Soustraction(nombre1, nombre2){
        return nombre1 - nombre2;
    }
    function Division(nombre1, nombre2){
            if(nombre2 == 0){
                throw new Error("Impossible de diviser un nombre par 0");
            }
        return nombre1 / nombre2;
    }

    do{
        choix = Number(prompt("Que souhaitez vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
    }while(choix != 1 && choix != 2 && choix != 3 && choix != 4)
    do{
        premierNombre = Number(prompt("Veuillez saisir votre 1er nombre (nombre réél) : "));
        deuxiemeNombre = Number(prompt("Veuillez saisir votre 2e nombre (nombre réél) : "));
    }while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

    try {
        switch (choix) {
            case 1:
                resultat = Addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat = Multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat = Soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat = Division(premierNombre, deuxiemeNombre);
                break;
            default:
                throw new Error("Faire un choix parmi ceux proposé");
                break;
            }
        alert("Le résultat de votre calcul est: " +resultat);

    } catch (error) {
        alert(error);
    }

    restart = confirm("Souhaiter vous refaire une calcul ?");
} while (restart);
