"use strict";

function f1(){
    const tableauetudiants= ['etudiants1','etudiant2','etudiant3'];

    console.clear();
    console.log('etudiants1');
    console.log('etudiants2');
    console.log('etudiants3');

}

function f2(){
    const objetetudiant ={
        nom:'John',
        prenom:'Doe',
        age:30
    };

    console.clear();
    console.log(objetetudiant);
}

function f3(){
    const tableauobjetetudiants=[
        {nom:'nom1' , prenom:'prenom1' , age:21},
        {nom:'nom2' , prenom:'prenom2' , age:22},
        {nom:'nom3' , prenom:'prenom3' , age:23}
    ];

    console.clear();
    tableauobjetetudiants.forEach(etudiant => {
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    });
}
