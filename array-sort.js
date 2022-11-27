//Array custom sort() function
let log = console.log;

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];

let numbers = [67,345,22,23,142,63,59,283,1,2,3,10,11,1540,16];

let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

//the problem with numbers
log( movies.sort() );  //ok
log( numbers.sort() );  //NOT ok

//the solution - using a custom sort
let sortedNum = numbers.sort( (a, b)=>{
    log( 'sorting', a, b);
    if( a > b) return 1;
    else if(b > a) return -1;
    else return 0;
} );
log(sortedNum);
document.getElementById("sortnum").innerHTML = sortedNum;

//sorting array of objects - using a custom sort
//sort by person name
let sortedPeople = people.sort( (a, b) => {
    if( a.id > b.id) return 1;
    else if(b.id > a.id) return -1;
    else return 0;
} );
log( sortedPeople );

log("All ok");