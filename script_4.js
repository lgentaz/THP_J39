const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log("Array filtré des entrepreneurs (hash) nés dans les années 70 :")
var seventies = new Array;
entrepreneurs.forEach( entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
        seventies.push(entrepreneur);
    }
});
console.log(seventies);

//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Array des entrepreneurs, nom et prénom :")

var full_names = new Array;
entrepreneurs.forEach( entrepreneur => {
    let first_name = entrepreneur.first;
    let last_name = entrepreneur.last;
    let full_name = first_name + " " +last_name;
    full_names.push(full_name);
});
console.log(full_names);

//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Liste des ages des entrepreneurs cette année :");

entrepreneurs.forEach( entrepreneur => {
    let age = 2020 - entrepreneur.year;
    console.log(entrepreneur.first + " " + entrepreneur.last + " à " + age + " ans en 2020.");
});

//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Array des entrepreneurs triés dans l'ordre alphabétique :");

function compare(a, b) {
    const nameA = a.last;
    const nameB = b.last;
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
}
  
let sorted_ent = entrepreneurs.sort(compare);
console.log(sorted_ent)
