
// for loop  print 1 to 5

for(let i = 1; i <=5;  i++){
    console.log("Hello world");
}

//Calculate sum of  1 to 5

let sum = 0;
for(let i =1; i <=5;  i++) {
    sum = sum + 1;
}
console.log("sum=",sum);
console.log("loop has ended");


// while loop

let i = 1;
while(i<=5){
    console.log("hello world");
   i++;
}



/// do while loop 

let j =1;
do {
  console.log("j =",j );
  j++;  
} while (j<=5);
 

//do while loop 
let b =1 ;
do {
    console.log("apna college");
    b++;  
  } while (b<=5);



  //   for - of loop 

  let str = "JavaScript";

  let size = 0; 

  for(let i of str) {
    console.log("i=",i);
    size++;

  }
   console.log("sting size", size);


   // for in  loop 

    let student={
        name: "vipin kanaujiya" ,
        age: 18,
        cgpa: 7.4,
        isFollow : true,
    };
    for(let key in student){
        console.log("key=",key,"value",student[key]);
    }
  


    /// practice question

//print all even numbers from 0 to 100.

for(let num = 0; num<=100; num++){
  if(num %2 ===0){
    console.log( " even number",num);
  }else {

  }
}
  
// odd number
 for (let number =0; number<=100; number++){
    if(number%3===0){
        console.log(  " odd number",number);
    }else{

    }
 }
///

///  pratices number 2
 let gameNum = 30;

  let userNum  = prompt("guess the number :");

  while (userNum != gameNum) { // game number 
 userNum= prompt("You entered wrong number. guess again:.");
  }

  console.log("congratualton, you entered the right number");