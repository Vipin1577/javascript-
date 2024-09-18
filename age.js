alert("hello");// one time popup


// simple
let name = prompt("vipin");
console.log(name);

//multiple number 

let num = prompt("Enter a number");

if(num % 5 ===0) {
    console.log(num,"is a multiple of 5");   
}
else{
    console.log(num,"is  not multiple of 5");   
}
 


// write a code which can give grades to student according to their scores:

let score = 6;
let grade; 

if(score >= 90 && score <= 100){
    grade = "A";

}else if(score >=70  && score <= 89) {
    grade = "B";
}else if(score >=60  && score <= 69) {
    grade = "C";
} else if(score >=50  && score <=59 ) {
    grade = "D";
} else if(score >=0 && score <= 49) {
    grade = "f";
}
console.log("accordind to your scores, your grade was", grade);