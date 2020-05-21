const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?
function not_rented(book) {
    if (book.rented === 0) {
        return true;
    } else {return false}
}

var unrented = new Array
books.forEach( book => {
    if (not_rented(book)) {
        unrented.push(book);
    }
});

if (unrented.length === 0) {
    console.log("Aucun livre non emprunté.");
} else {
    console.log(`${unrented.length} livre(s) non emprunté.`);
    console.log(unrented);
}

//Quel est livre le plus emprunté ?
function compare(a, b) {
    const rented_a = a.rented;
    const rented_b = b.rented;

    let comparison = 0;
    if (rented_a > rented_b) {
      comparison = 1;
    } else if (rented_a < rented_b) {
      comparison = -1;
    }
    return comparison;
}
  
let sort_rented = books.sort(compare);

let most_rented = sort_rented[books.length - 1];
console.log("Le livre le plus emprunté est " + most_rented.title + ".");

//Quel est le livre le moins emprunté ?
least_rented = sort_rented[0];
console.log("Le livre le moins emprunté est " + least_rented.title + ".");

//Trouve le livre avec l'ID: 873495 ;
function find_id(book, ident) {
    const book_id = book.id;
    if (book_id == ident) {
        return true;
    }
}

books.forEach( book => {
    if (find_id(book, 873495)) {
        console.log(`L'id 873495 correspond à ${book.title}`);
    }
});

//Supprime le livre avec l'ID: 133712 ;
var position = 0
books.forEach( book => {
    if (find_id(book, 133712)) {
        books.splice(position,1);
        console.log(`${book.title}, id 133712, a été supprimer`);
        console.log(books);
    }
    position += 1;
});

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
function alpha(a, b) {
    const title_a = a.title;
    const title_b = b.title;

    let comparison = 0;
    if (title_a > title_b) {
      comparison = 1;
    } else if (title_a < title_b) {
      comparison = -1;
    }
    return comparison;
}

let sort_alpha = books.sort(alpha);
console.log(sort_alpha)