console.log("Lappu sachin");
let name="pandey";
const age=21;
var roll_no="2400320101186";
let y=null;
let check=true;
console.log(name,age,roll_no,check,y);

console.log(typeof name)// tells type of datatype
//conditional statement
if(age>18)
{
    console.log("eleigible for drinking");
}
else
{
    console.log("not eligible");
}
//loops
for(let i=0;i<age-3;i++)
{
    console.log("Must not drink",i);
}
let i=0;
while(i<3)
{
    console.log(1);
    i++;
}
//function  type 1

let a=2,b=3;
function click(a,b){
    return a*b;
}
//function type 2
function greet (title ="purwar")
{
    console.log( "Hello" +title);
}
//arrow function
let multiply=(a,b)=>a*b;//all var,let and const
console.log(multiply(a,b));
console.log(click(a,b));
//array
let numbers=[1,2,3,4,5];
numbers.push[0];
numbers.pop();
//objects usecase
let Student={
    name1:"mishra",
    age:"90",
    course:"cse",
};
console.log(Student.name)
/*output 
type 1:console
type 2 alert*/
alert("Hi");

//scope in js
{
    let a=10;
    const b=20;
    var c=30;
}
console.log(c);
//callback function
function calculate(a,b,operations)
{
    return operations(a,b);
}
calculate(3,4,(x,y)=>x+y);
//array methods
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
let even = nums.filter(n => n % 2 === 0);
//spread & Rest
let arr1=[1,2];
let arr2=[...arr1,3,4];
console.log(arr2);
function displayMessage()
{
    setTimeout(() => {console.log("Runs after 2 seconds");}, 2000);
}
//asyn/await function
async function fetchData() {
  let data = await promise;
  console.log(data);
}
//DOM Manipulation
document.getElementById("title").innertext="Hello JS";
button.addEventListener("click",()=>console.log("Button clicked"));
