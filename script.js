//Basic Functions

//1.Create function hello that prints "Hello Everyone".
function hello(){
    console.log("Hello Everyone");
}
hello();

//2.welcome prints "Welcome to JavaScript" and call it.
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();

//3.navi prints your name.
function navi(){
    console.log("Kalyan");
}
navi();

//4.message prints three different messages.
function message(){
    console.log("Hi");
    console.log("How are you");
    console.log("Bye");
}
message();

//5.numbers prints 1 to 5 using for.
function numbers(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
numbers();

//6.check contains an if condition and prints a message when true.
function check(){
    let age=19;
    if(age>=18){
        console.log(true);
    }
}
check();

//7.details prints name, qualification, role.
function details(){
    console.log("Kalyan");
    console.log("MCA");
    console.log("Software Developer");
}
details();

//8.company prints company name.
function company(){
    console.log("Stackly");
}
company();

//9.welcomeUser call three times.
function welcomeUser(){
    console.log("Kalyan");
}
welcomeUser();
welcomeUser();
welcomeUser();

//10.Two different functions and call both.
function first(){
    console.log("Kalyan");
}
first();

function second(){
    console.log("Garige");
}
second();


//Parameters & Arguments

//11.Function with one parameter, print parameter.
function test(name){
    console.log(name);
}
test("Kalyan");

//12.Function with two parameters, print both.
function details1(name,age){
    console.log(name,age);
}
details1("Kalyan",26);

//13.add(a,b) prints addition.
function add(a,b){
    console.log(a+b);
}
add(10,5);

//14.sub(a,b) prints subtraction.
function sub(a,b){
    console.log(a-b);
}
sub(10,5);

//15.multiply(a,b) prints multiplication.
function multiply(a,b){
    console.log(a*b);
}
multiply(10,5);

//16.divide(a,b) prints division.
function divide(a,b){
    console.log(a/b);
}
divide(10,5);

//17.student(name,age) print student details.
function student(name,age){
    console.log(name,age);
}
student("Vijay",22);

//18.employee(name,role,salary) print all three.
function employee(name,role,salary){
    console.log(name,role,salary);
}
employee("Kalyan","Software Developer",20000);

//19.Function with four parameters and four arguments.
function employee1(id,name,role,salary){
    console.log(id,name,role,salary);
}
employee1(101,"Kalyan","Software Developer",20000);

//20.Function with six parameters and six different values.
function employee2(id,name,role,salary,company,place){
    console.log(id,name,role,salary,company,place);
}
employee2(101,"Kalyan","Software Developer",20000,"Stackly","Hyderabad");


//Default Parameters

//21.student(name,department,cgpa) with default department.
function student1(name,department="Computer Science",cgpa){
    console.log(name,department,cgpa);
}
student1("Kalyan",undefined,7.5);

//22.user(name,age=18) called without age.
function user(name,age=18){
    console.log(name,age);
}
user("Kalyan");

//23.employee(name,role="Developer") called with only name.
function employee3(name,role="Developer"){
    console.log(name,role);
}
employee3("Kalyan");

//24.form(name,department,cgpa,disability="no"), call twice.
function form(name,department,cgpa,disability="no"){
    console.log(name,department,cgpa,disability);
}
form("Kalyan","CSE",8.5);
form("Vijay","ECE",9.0);

//25.Function with two normal parameters and one default.
function example(a,b,c=10){
    console.log(a,b,c);
}
example(20,30);


//Return

//26.Function accepts two numbers and returns addition.
function add1(a,b){
    return a+b;
}
let result=add1(10,20);
console.log(result);

//27.Returns subtraction.
function sub1(a,b){
    return a-b;
}
let result1=sub1(10,20);
console.log(result1);

//28.Returns multiplication.
function multiply1(a,b){
    return a*b;
}
let result2=multiply1(10,20);
console.log(result2);

//29.Returns division.
function div(a,b){
    return a/b;
}
let result3=div(10,20);
console.log(result3);

//30.salary() returns 40000, store and print.
function salary(){
    return 40000;
}
let result4=salary();
console.log(result4);

//31.Accepts employee salary and returns salary.
function employee4(salary){
    return salary;
}
let result5=employee4(20000);
console.log(result5);

//32.Returns person name, store and print.
function person(name){
    return name;
}
let result6=person("Kalyan");
console.log(result6);

//33.Returns Pass if marks >=35 otherwise Fail.
function checkMarks(marks){
    if(marks>=35){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
let result7=checkMarks(36);
console.log(result7);

//34.Accepts price and discount and returns discount value.
function accept(price,discount){
    return discount;
}
let result8=accept(100,10);
console.log(result8);

//35.Return result of arithmetic operation and use returned value in another function.
function add2(a,b){
    return a+b;
}

function show(result){
    console.log(result);
}

let answer=add2(10,20);
show(answer);


//Outer Scope

//36.Variable outside function, access inside.
let name="Kalyan";

function inside(){
    console.log(name);
}
inside();

//37.Object outside with name/designation, function prints values.
let employee5={
    name:"Kalyan",
    designation:"Software Developer"
}

function empDetails(){
    console.log(employee5.name,employee5.designation);
}
empDetails();

//38.Salary outside, function adds bonus and prints result.
let salary1=30000;

function totalSalary(){
    let bonus=6000;
    console.log(salary1+bonus);
}
totalSalary();

//39.Employee object outside, access properties inside function.
let employee6={
    name:"Kalyan",
    role:"Software Developer",
    salary:25000
}

function empDetails1(){
    console.log(employee6.name+" "+employee6.role+" "+employee6.salary);
}
empDetails1();

//40.Two functions access same outer variable.
let name1="Vijay";

function first1(){
    console.log(name1);
}

function second1(){
    console.log(name1);
}

first1();
second1();


//Named, Anonymous & Arrow Functions

//41.Named function accepts parameter and prints it.
function emp(name){
    console.log(name);
}
emp("Kalyan");

//42.Anonymous function in variable and call it.
let show1=function(name){
    console.log(name);
}
show1("Kalyan");

//43.Arrow function accepts one parameter and prints it.
let show2=(name)=>{
    console.log(name);
}
show2("Stackly");

//44.Arrow function with two parameters adds two numbers.
let add3=(a,b)=>{
    return a+b;
}
let result9=add3(10,20);
console.log(result9);

//45.Named, anonymous, arrow all do same addition.
function add4(a,b){
    return a+b;
}

let add5=function(a2,b2){
    return a2+b2;
}

let add6=(a3,b3)=>{
    return a3+b3;
}

console.log(add4(10,20));
console.log(add5(20,30));
console.log(add6(30,40));


//IIFE

//46.IIFE immediately prints "Hello JavaScript".
(function(){
    console.log("Hello Javascript");
})();

//47.IIFE accepts name and prints Hello + name.
(function(name){
    console.log("Hello "+name);
})("Kalyan");

//48.IIFE accepts product and discount and displays special offer message.
(function(product,discount){
    console.log(product);
    console.log(discount+"% OFF");
})("Laptop",20);


//Callback & Higher-Order Function

//49.add accepts callback and two numbers, add numbers then call callback.
function add7(callback,a,b){
    console.log(a+b);
    callback(20,20);
}

function sub2(a,b){
    console.log(a-b);
}

add7(sub2,20,40);

//50.sub passed as callback to add.
function add8(callback,a,b){
    console.log(a+b);
    callback(20,20);
}

function sub3(a,b){
    console.log(a-b);
}

add8(sub3,20,40);