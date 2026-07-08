for(let i=1;i<=5;i++){
    console.log("Anshika Singh");
}

//sum upto n number
let sum=0;

for(let i=0;i<=5;i++){
    sum+=i;
}
console.log("sum of num is",sum);

//even number btw 0 to 20
for(let num=0;num<=20;num++){
    if(num%2===0){
        console.log("Even number: ",num);
    }
}

//guessing the number
let gameNum=25;
let num=prompt("Enter number:");

while(num!=gameNum){
    num=prompt("Enter number again to guess the right number:");
}

console.log(" Congratulations!.You guess the the right number. ");

//userid creation

let fullName=prompt("Enter your  full name:");
let userName="@"+fullName+fullName.length;
console.log(userName);
