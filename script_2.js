let what_number = prompt("De quel nombre veux-tu calculer la factorielle ?");

for(var fact = 1; what_number > 0; what_number--){
    fact *= what_number;
}
console.log(`Le résultat est : ${fact}.`);