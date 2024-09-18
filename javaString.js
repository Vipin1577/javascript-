// strings 
////let str = "Helloworld";

//console.log(str[5]);


/// Temlate Literals  

let String = 'this is a temlate literal ${1 + 2 + 3}'  ;  
console.log(String);

//  str.to UpperCase()

let str ="ApnaCollge";
str = str.toUpperCase();
console.log(str);

/// str.toLowerCase()
let strnew ="THAKUR COLLEGE";
strnew  = strnew.toLowerCase();
console.log(strnew);


/// str.strim ()  //remove white space 

let str1 =  "thakur    college    science  ";
console.log(str1.trim()); // run nhau hai 


///  lets practice quetion 


 let fullName  = prompt("enter your fullName without spaces");
 let username = "@" +    fullName + fullName.length;
 console.log(username);