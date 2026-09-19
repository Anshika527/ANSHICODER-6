// average marks

let marks=[85 ,89,67,34,55,28];
console.log(marks);
let avg_marks;
let sum=0;
for(mark of marks){
    sum+=mark;
}
avg_marks=sum/(marks.length);
console.log("Average maks of array is ",avg_marks);

//array methods

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(companies);


companies.shift();
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);