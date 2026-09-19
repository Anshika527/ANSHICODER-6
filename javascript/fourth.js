//function of vowels counting

function countVowels(str){
    let count=0;
    for(let char of str.toLowerCase()){
        if(char==='a' ||
           char=== 'e'|| 
           char==='i' || 
           char==='o' || 
           char==='u' 
        )

            count++;
    }
    return count;
}

let str="Anshika singh";
let ans=countVowels(str);
console.log(ans);

//using arrow function

const count_vowel= (str) => {
    let count=0;
    for(let char of str.toLowerCase()){
        if(char==='a' ||
           char=== 'e'|| 
           char==='i' || 
           char==='o' || 
           char==='u' 
        )

            count++;
    }
    return count;

}

console.log(count_vowel("Uma Bharti"));

//squares of array values using ForEach loop

let arr=[2,7,9,52,0,-2];

arr.forEach((val)=>{
    console.log(val*val);
});

const calcSquare = (val) => {
    console.log(val**2);
}

arr.forEach(calcSquare);

//max marks of students using filter

let marks=[87,67,90,94,23,78,98];

let newMarks=marks.filter((val)=>{
    return val>=90;
})

console.log(newMarks);

//reduce method on array

let num=prompt("Enter num:");
let arr=[];
for(let i=1;i<=num;i++){
    arr[i-1]=i;
}

console.log(arr);

let sumArr=arr.reduce((prev,curr)=>{
    return prev+curr;

})

console.log("sum = ",sumArr);

let mulArr = arr.reduce((prev,curr) => {
    return prev*curr;
})

console.log("multiplication = ",mulArr);