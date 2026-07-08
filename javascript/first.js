/*Mutiple of 5*/

let num=prompt("Enter a num:");
if(num%5===0){
    console.log(num,"Mutiple of 5 ");
}
else{
    console.log(num," is NOT multiple of 5");
}

/*grade system*/
let grade;

let marks=prompt("Enter marks:");
if(marks>=90 && marks<= 100){
    grade="A";
}

else if(marks>=70 && marks<=89){
   grade="B";
}

else if(marks>=60 && marks <=69){
    grade="C";
}

else if(marks>=50 && marks<= 59){
    grade="D";
    
}
else if(marks>=0 && marks <=49){
    grade="F";
}

console.log("Your grade is ",grade);





