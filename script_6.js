var arn_sequence = prompt("Quelle est la séquence à décoder?");

// séquences de l'exercice
//UUACGCAGUAGA
//CCGUCGUUGCGCUACAGC
//CCUCGCCGGUACUUCUCG

let array_arn = arn_sequence.split("");

function not_arn(array){
    var not_letter = false
    array.forEach(letter => {
        if ((letter != "A") && (letter != "C") && (letter !=  "G") && (letter != "U")){
            not_letter = true;
        }
    });
    return not_letter;
}


while (arn_sequence.length%3 != 0 || not_arn(array_arn)){
    arn_sequence = prompt("Séquence non valide. Rentrer une autre séquence: ");
    array_arn = arn_sequence.split("");
}

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
            return "Serine";
        } else if (codon[1] == "U") {
            if ((codon[2] == "A") || (codon[2] == "G")) {
                return "Leucine";
            } else { return "Phénylalanine" }
        }    } 
    else if ((codon[0] == "A") && (codon[1] == "G")) { 
        if ((codon[2] == "A") || (codon[2] == "G")) {
            return "Arginine";
        } else { return "Sérine" }
    }
}

let sequencing = new Array;

while (nb_of_codons > 0 ) {
    let codon = array_arn.splice(0,3);
    let protein = compare(codon);
    sequencing.push(protein);
    nb_of_codons -= 1;
}

console.log(sequencing.join("-"))
