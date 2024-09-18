let marks = [ 97, 82 , 75, 64, 36 ]; 
console.log(marks); 
console.log(marks.length);


let heroes = [ "vipin", "ajay", "shubham", "ayush", "sachin"];
console.log(heroes);


/// loping over an aray 
  
// for loop
let hero = [ "abhay", "ayush", "prayanshu", "vipin"];
for(let i =0; i<hero.length; i++) {
    console.log(hero[i]);
}


// self pratices

let game = ["mubai", "kolkata", "delhi", "pune", "gujarat"];
for(let i = 0; i<game.length; i++){
    console.log(game[i]);
}


///for of loop 


let cities = ["mubai", "kolkata", "delhi", "pune", "gujarat"];
for(let i of cities) {
    console.log(i);
}

//uppercase()


let city = ["mubai", "kolkata", "delhi", "pune", "gujarat"];
for(let i of cities) {
    console.log(i.toUpperCase());
}


/// let's pratice  question 

let markes = [85 ,97, 44, 37,  76, 60];


let sum = 0;
for(let val of markes){
sum += val;

}
let avg = sum / markes.length;
console.log('total val of aveg = ${average}');



// pratice 2 ]
// Q 2 ] for a give array with prices of 5 items ->[250,645,300,900,50]
// All item have an offer of 10% off on them . Change the array to stroe final price after 
   // applying

let items =  [250, 645, 300, 900, 50];

let  i = 0; 

for(let val of items ) {
 let offer = val / 10;
 
items[i]  = items[i]- offer;
console.log('value after offer = ${ items[i]}');
i++;

}

//

let item =  [250, 645, 300, 900, 50];

for (let i = 0; i< item.length; i++) {
    let offer  = item[i] / 10;
    item[i] -= offer;
}

console.log(item);



// self code 

let  toy = [ 100, 200, 300, 400, 500];

for(let idex = 0; idex<toy.length; idex++) {

    let offer = toy[idex] / 40;
 
  toy[idex] -= offer;

}
 console.log(toy);


 

 