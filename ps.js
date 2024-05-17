// rows=13;
// n=1;
// for(i=1;i<=rows;i++){
//     s="";
//     for(j=1;j<=rows;j++){
//         if(i==1 || i==rows || j==1 || j==rows){
//             s=s+"* ";

//         }
//         else{
//             s=s+"  "
//         }
//     }
//     console.log(s)
// }

// let rows=4;
// for(i=0;i<rows;i++){
//     s1="";
//     s2="";
//     for(j=i;j>=0;j--){
//         s1=s1+j;
    
//     }
//     for(k=1;k<=i;k++){
//         s2=s2+k;
    
//     }
//     console.log(s1+s2);
// }


// rows=13;
// n=1;
// for(i=1;i<=rows;i++){
//     s="";
//     for(j=1;j<=rows;j++){
//         if( i==rows || j==rows ||i==j){
//             if(i==1&&j==1){
//             s=s+" ";
//             continue;
//             }
//             else{
//                 s=s+"* ";
//             }
//         }
//         else{
//             s=s+"  "
//         }
//     }
//     console.log(s)
// }


// rows=5;
// n=1;
// for(i=1;i<=rows;i++){
//     s="";
//     let t=Math.ceil(rows/2);
//     for(j=1;j<=t;j++){
//         if(j==1||i==j || i==t ||(i>t&&i<rows&&j<t)){
//             s=s+"*  ";
//         }
//         else{
//         s=s+"   ";

        
//         }
//     }
    
    
//     console.log(s)
// }


// rows=7;
// n=1;
// for(i=1;i<=rows;i++){
//     s="";
//     let t=Math.ceil(rows/2);
//     for(j=1;j<=t;j++){
//         if(i==t ||j==1|| (i>1&&j>1&&i!=rows&&j!=t)){
//             s=s+"*  ";
//         }
//         else{
//         s=s+"   ";

        
//         }
//     }
    
    
//     console.log(s)
// }

//pyramid pattern diff codes for one pattern
// let rows=7;
// for(i=1;i<=rows;i++){
//     spaces="";
//     stars="";
//     for(k=1;k<=rows-i;k++){
//         spaces+=" ";
//     }
//     for(j=1;j<=i;j++){
//         stars+="* "
//     }
//     console.log(spaces+stars);
// }



// let rowss = 7;
// for (let i = 0; i < rowss; i++) {
//     let row = '';
//     for (let j = 0; j < rowss; j++) {
//         if (j < rows - i - 1) {
//             row += ' ';
//         } else {
//             row += '* ';
//         }
//     }
//     console.log(row);
// }


// let rows1 = 7;
// for (let i = 0; i < rows1; i++) {
//     let spaces = ' '.repeat(rows1 - i - 1);
//     let stars = '* '.repeat(i + 1);
//     console.log(spaces + stars);
// }


// let rows=10;
// for(i=1;i<=rows;i++){
//     s="";
//     for
// }

// let str1="silent";
// let str2="listen";
// let s1="";
// let s2="";

// s1=str1.split("").sort();
// s2=str2.split("").sort();


// for(i=0;i<s1.length;i++){
//     if(s1[i]==s2[i]){
//             console.log("given strings is anagram")
//         }
//         else{
//             console.log("given string is not an anagram")
//         }
//         break;
//     }

//  let str="helloooworld";
//  str1=[];
//  for(i=0;i<str.length;i++){
//     if(str[i]!==str[i+1]){
//         str1.push(str[i])
        
//     }
//  }
//  str=str1.toString();
//  str2=str.split(",").join("");
//  console.log(str2)


// let a="i am going to school ";
//  arr=[];arr1=[];
// a=a.split(" ");
// console.log(a)
// for(i=0;i<a.length;i++){
// if(a[i]!=''){
//     arr.push(a[i])

// }
// }
// console.log(arr)
//  console.log((arr[arr.length-1]).length)

// function printPattern(rows) {
//     for(let i = 1; i <= rows - 1; i++) {
//     let pattern = '';
//     for(let j = 1; j <= i; j++) {
//     pattern += '* ';
//     }
//     console.log(pattern);
//     }
//     for(let i = rows; i >= 1; i--) {
//     let pattern = '';
//     for(let j = 1; j <= i; j++) {
//     pattern += '* ';
//     }
//     console.log(pattern);
//     }
//    }
//    printPattern(3); 


//    let rows=3;
//    for(i=3;i>=1;i--){
//     let pattern='';
//     for(j=i;j>=1;j++){
//         pattern+='* ';   

//     }
//     console.log(pattern);
//    }

// //    for(i=rows;i>=1;i++){
//     let pattern='';
   
//    for(j=rows;j>=1;j--){
//     pattern+='* '

//    }
//    console.log(pattern)
// }

// let rows=3;
// for(i=rows;i>=1;i--){
//     let pattern='';
//     for(j=i;j>=1;j--){
//         pattern+='* ';

//     }
//     console.log(pattern)

// }


var c="cha_it_an_ya";
var d="";
var underscore=true;
for(i=0;i<=c.length-1;i++){
    if(c[i]==="_"){
        underscore=true;
    }else{
    if(underscore){
        d=d+c[i].toUpperCase();
        underscore=false;
    }else{
        d=d+c[i];
    }
    }
}
console.log(d);





var c = "cha_it_an_ya";
var d = "";
var underscore = true;

for (let i = 0; i < c.length; i++) {
    d += (underscore && c[i] !== '_') ? c[i].toUpperCase() : c[i];
    underscore = (c[i] !== '_')? true:false;
}
console.log(d);



var c = "cha_it_an_ya";
var d = "";
var underscore = true;
for (let i = 0; i < c.length; i++) {
    if (c[i] === '_') {
        underscore = true;
    } else {
        d += underscore ? c[i].toUpperCase() : c[i];
        underscore = false;
    }
}
console.log(d);


//input:abccdeeeb
//output:112131
let str = prompt("Enter a string: ");
let empty = "";
let c = 1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        c++;
    } else {
        empty += c;
        c = 1;
    }
}
console.log(empty);



let str1 = prompt("Enter a string: ");
let empty1 = '';
let start = 0;
let end = str1.length - 1;

while (start <= end) {
    if (start === end) {
        empty1 += str1[start];
    } else {
        empty1 += str1[start] + str[end];
    }
    start++;
    end--;
}

console.log(empty1);



//date problem
m_date = [{ date: "22-03-24" }];
//console.log(m_date)
num = prompt("Enter no.of dates:");
arr = [];
arr1 = [];
arr1 = m_date[0].date.split("-");
console.log(arr1)
for (i = 1; i <= num; i++) {
    obj = {};
    console.log("Enter date" + i);
    date = prompt();
    obj["date"] = date;
    arr.push(obj);
}
 //let count = 0;
for (j of arr) {
    value = i.date.split("-");
    console.log(value)
    if (value[1] == arr1[1] && value[2] == arr1[2] && parseInt(value[0]) == parseInt(arr1[0]) + 1) {
        count++;
    }
console.log(count)
if (count == num) {
    console.log(count);
} else {
    console.log("none");
}
}

//dates problem
let m_date = prompt("Enter the date you want to compare (DD-MM-YY):");
let obj1 = {};
obj1["m_date"] = m_date;
let num = parseInt(prompt("Enter the number of dates:"));
let arr = [];
let arr1 = m_date.split("-");

console.log(arr1);

for (let i = 1; i <= num; i++) {
    let obj = {};
    console.log("Enter date " + i + " (DD-MM-YY):");
    let date = prompt();
    obj["date"] = date;
    arr.push(obj);
}
console.log(arr);

let count = 0;
for (let j of arr) {
    let value = j.date.split("-");
    if (
        parseInt(value[2]) === parseInt(arr1[2]) &&
        parseInt(value[1]) === parseInt(arr1[1]) &&
        parseInt(value[0]) === parseInt(arr1[0]) + count + 1
    ) {
        count++;
    }
}

console.log("Count of consecutive dates:", count);

if (count === num) {
    console.log(`${count} dates are consecutive.`);
} else {
    console.log("Not all dates are consecutive.");
}







 










