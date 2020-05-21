let steps = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let brick = "#";
let empty = " ";

for(let count = steps - 1; count >=0; count--){
    let stage = ""
    for(let i = count; i>0; i--){
        stage += empty;
    }
    for(let j = steps-count; j>0; j--){
        stage += brick;
    }
    console.log(stage);
    stage = "";
}

//alternative rapide
/*var num = Number(prompt("Une pyramide avec combien d'étages?"));
function pyramid(num){
    brick = "#";
    while(brick.length <= num){
    console.log(brick.padStart(num," "));
    brick += "#";
    }
};
pyramid(num);
alert("done"); */