"use strict";

const Students=[
    [1000, "John" , "Doe" , 14 , 5],
    [2000, "Bob" , "Carlton" , 7 , 1],
    [3000, "Rayane" , "Smith" , 13 , 3]
];

function A(){
    console.clear();

    for (let i=0 ; i<Students.length ; i++){
        const id=Students[i][0];
        const note1=Students[i][3];
        const note2=Students[i][4];
        const moyenne=(note1+note2)/2+5;
        const resultat=B(moyenne);

        console.log(id + ":" + resultat);
    }
}

function B(moyanne){
    if (moyenne>=10){
        return "Admis";
    }else{
        return "Ajournee";
    }
}