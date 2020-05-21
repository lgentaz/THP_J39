var dialog = prompt("Qu'est-ce que tu veux dire à AcnéBot?");


// Si on lui envoie un message vide, le bot répond  ;
if (dialog === ""){
    console.log("t'es en PLS ?");
}
// Si on lui pose une question (= la phrase finie par "?"), le bot répond  ;
else if (dialog.indexOf("?") === (dialog.length - 1)){
    console.log("Ouais Ouais...");
} 
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond  ;
else if (dialog.toUpperCase() === dialog) {
    console.log("Pwa, calme-toi...");
}
// Si la phrase que tu prononces contient le mot  ; "Fortnite", le bot répond
else if (dialog.includes("Fortnite")){
    console.log("on s' fait une partie soum-soum ?");
}
else {
    console.log("balek."); 
}
