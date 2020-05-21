var arn_sequence = prompt("Quelle est la séquence à décoder?");

let array_arn = arn_sequence.split("");

function not_arn(array){
    array.forEach(letter => {
        if (letter != "A" || letter != "C" || letter !=  "G" || letter != "U"){
            return true;
        }
    });
}

console.log(not_arn(array_arn));

/* while (arn_sequence.length%3 != 0 || not_arn(array_arn)){
    arn_sequence = prompt("Séquence non valide, rentrer la séquence à décoder");
}
*/

let nb_of_codons = arn_sequence.length / 3;

function compare(codon) {
    if (codon[1] == "A") {
        return "Tyrosine";
    }
    else if (codon[0] == "C") {
        if (codon[1] == "C") {
            return "Proline";
        } else if (codon[1] == "G") {
            return "Arginine";
        }    }
    else if (codon[0] == "U") {
        if (codon[1] == "C") {
            return "Proline";
        } else if (codon[1] == "U") {
            if (codon[2] == "A" || codon[2] == "G") {
                return "Leucine";
            } else { return "Phénylalanine" }
        }    } 
    else if (codon[0] == "A" && codon[1] == "G") { 
        if (codon[2] == "A" || codon[2] == "G") {
            return "Arginine";
        } else { return "Sérine" }
    }
}

let sequencing = new Array;

while (nb_of_codons > 0 ) {
    console.log(nb_of_codons);
    let codon = array_arn.splice(0,3);
    console.log(codon);
    let protein = compare(codon);
    console.log(protein);
    sequencing.push(protein);
    nb_of_codons -= 1;
}

console.log(sequencing.join("-"))



//UUACGCAGUAGA

//CCGUCGUUGCGCUACAGC
//CCUCGCCGGUACUUCUCG
