alert('welcome Bishop');



// varaibles are container or a location that can holds value

let name = 'Fisayo';

console.log(name)


//let a =26;
//let b = 34;
//let result= a+b
//alert('Addition of A + 34 is =' + result + '' + 'what is the value of A');
//console.log(result)


//conditional statement 

//let A = 60;
//let B = 40;

//if(A > B){
  //document.write('A is > B')
//}
//else{
  //document.write('A is < B')
//};

//Ternary operation
//let A = 30, B= 40
//document.write(A > B ? 'A is > B' : 'B > A');

//Switch operation 
//let city = 'Accra'
//switch(city) {
  //case 'Abuja':
    //document.write('Abuja is the federal capital of Nigeria');
    //break;

  //case 'Benin':
    //document.write('Benin is the heart of Nigeria');
    //break;

  //case 'Accra':
    //document.write('Accra is not a city in Nigeria, however it is the capital of Ghana');
    //break;
  
  //default:
    //document.write('Information about the selected city not available yet');
//}

// Javascript operators (arithemtric, equality, unary, relational, logical, conditional & assignment operator)

//let year = '1987'
//document.write(++year);

// Wrie a progrm to find the oldest child 
//let fisayoAge = 3, tosinAge = 3, folakeAge =3;

//if (fisayoAge > tosinAge && fisayoAge > folakeAge){
  //document.write('Fisayo is the oldest');
//}

//else if (tosinAge > fisayoAge && tosinAge >folakeAge){
  //document.write('Tosin is the oldest')
//}

//else if (folakeAge > fisayoAge && folakeAge > tosinAge){
  //document.write('Folake is the oldest child')
//}

//else{
  //document.write('They were all born on the same day')
//}
 


// write a program to find the following grades in a tertiary instititution 
  //First class >> Student scores 4.5-5
  //Second class upper >> Student scores 3.5-4.4
  //Second class lower >> Student scores 3.0-3.4
  //Third class >> Student scores 2.5-2.9
  //Pass >> Student scores 2.0-2.4
  // Else Fail 0-1.9


 //let grades = 4.8;

 //if (grades >= 4.5 && grades <=5.0){
  //document.write('First Class');
 //}

 //else if  (grades >=3.5 && grades <=4.4){
  //document.write('Second Class Uppper')
 //}

 //else if (grades >=3.0 && grades <=3.4){
  //document.write('Second Class')
 //}

 //else if (grades >= 2.5 && grades <= 2.9){
  //document.write('Third Class');
 //}

 //else if (grades >= 2.0 && grades <= 2.4){
  //document.write('Pass');
// }

 //else if (grades >= 0.0 && grades <= 1.9){
  //document.write('Fail');
 //}

 //else{
  //document.write('Not a grade')
 //}

//Learning Loop
//Loop is a sequence of instruction or codes that continously reapet untill a certain condition is met
//Tpyes of loop: (1) While Lopp  (2) Do While Loop and (3) For Loop

//While Loop

//let count = 0;

//while(count < 5){
  //document.write(count, ' counting is cool <br/>');
  //count++;
  //or use count +=1
//}

//Do While Loop

//let num = 0;

//do{
  //document.write(count,' Do while loop <br/>')
  //count++
  //or use num +=1

//}while(numt < 5)


//For Loop

//for(let num=1; num <= 20; num++){
 
  //if (num % 2 == 0){
    //document.write(num, ' Even Number <br/>');
  
  //}
  
  //else if (num % 3 ==0){
    //document.write( num, ' Old Number <br/>');
  //}

  //else{
    //document.write(num,' Prime Number, <br/>');
  //}
//}


//ClassWork: write a javascript  program to run a fizz buzz game from 1-100
//1. declare and intialize your variable num =1
//2. print Fizzbuzz if num % 3 & num % 5 ==0
//3. print Fizz if num % 3 ==0
//4. print Buzz if num %  5== 0
//5. else print num


//solution
//document.write('A FizzBuzz Game!!! <br/>')

//for(let num=1; num <=100; num++){

  //if (num % 3 == 0 && num % 5 == 0){
    //document.write('FizzBuzz <br/>');
  //}

  //else if (num % 3 ==0){
    //document.write('Fizz <br/>');
  //}

  //else if (num % 5==0){
    //document.write('Buzz <br/>');
  //}

  //else{
    //document.write(num, '<br/>')
  //}
//}


//Fuction in Jascript

// Fuctions are resuable codes whuich can be called anywhere in the program

//function fisayo (){
  //document.write('This is a function');  
//}
//function calcArea(width, height){
  //let area = width * height;
  //document.write(area)
//}

//calcArea(5, 6)

// Currency calculator
//function calc1(){

  //let n = document.getElementById('naira').value;
  //let N = n/756;

  //document.getElementById('answer').value = N; 
//}

//function calc2(){

  //let d = document.getElementById('dollar').value;
  //let D = d*756;

  //document.getElementById('answer1').value = D; 
//}

//Write a javaScript program to calculate the area of a triangle 
// area = sqrt(s(s-a)(s-b)(s-c)) where s = a+b+c/2

//Solution
//function calcT(){
  //let a = document.getElementById('a').value;
  //let b = document.getElementById('b').value;
  //let c = document.getElementById('c').value;
  //let s = a*b*c/2;
  //let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  //document.getElementById('Answer').value = area
//}

//ARRAY IN JAvASCRIPT
//An array is an object that that store multiple values on a single vriable

//Example of an array

//var age =[32, 41, 35, 26];

//var names = ['Ade', 'John', 'Akin', 'Biodun'];

//var subjects = ['Mathemathics', 'Biology', 'Physics', 'Chemistry'];

//document.write(age[3], names[3], subjects[3]); 

//Examle of array 

//let person = new Array();
//person.name = 'Akintayo';
//person.age = 36;
//person.career ='Engineer';

//document.write(person.name, person.age,  person.career);

//let num1 = 2.7
//let num2 = Math.round(num1);

//let value = Math.floor (Math.random() *200)

//document.write(value);

//Destructured Array: It means we are assigning it to a variables

//example

//var nameanimals = ['Cat', 'Dogs', 'Cats', 'Cows'];

//var [animal1, animal2, animal3, animal4] = nameanimals

//document.write(animal2, animal4)

//Examples 2

//let carNames = ['Toyota', 'Lexus', 'BMW', 'Innoson']

//let car1, remainingcars;

//[car1, ...remainingcars] = carNames;

//document.write(remainingcars);

// Example 3

//let carNames = ['Toyota', 'Lexus', 'BMW', 'Innoson']

//let car1, remainingcars;

//the commas is use to remove variables
//[,,, ...remainingcars] = carNames;

//document.write(remainingcars);


//NEXT Topic: Object

//let person = new Object();
//person.name = 'Sunday';
//person.age = 40;

//document.write( person.age)

//Better way t0 declare object

//let person = {
   // name: 'Fisayo', 
    //age: 37, 
    //profession: 'engineer', 
    //Expierence: '7 years '
//};

//document.write(person.name, person.age, person.Expierence)

//Object Destruction

//Normal object
//let car = {
  // id: 5000,
    //style: 'convertible',
  
//};

//document.write(car.style)

// object destructuring Example 1
//let{id, style} = car;

//document.write(id, style);

//ARROW FUNCTION

//let getId = (prefix, suffix) => {
  //  return prefix + 123 + suffix;

//};
//console.log(getId('ID :', '!'));

//DEFAULT PARAMTER 

 //let trackCar = function(carId, city = 'NY') {
  //console.log('Tracking ${carId} in ${city}');
 //};
 //console.log(trackCar(123));
  
 //console.log(trackCar(123, 'Chicago'));


 //CONSTRCUTOR FUNCTION

 //function car(id){
   // this.carId = id;
    //this.start = function() {
      //console.log('start:' + this.carId);
    //};
 //}
 //let vehicle = new car(123);
 //vehicle.start();

 //TWEET COMPOSER
 //let tweet = prompt('Please compose your tweet')
 //let tweetLenght = tweet.length;

 //alert('You have written ' + tweetLenght + ' characters, you have' + ' ' + (140-tweetLenght) + 
 //' character left to write.' + ' Keep going!')


 //SLICE : It is use to break worlds or sentensce 

 //let myName = 'Fisayo'

 //alert(myName.slice(0, 3));

//Using Slice to determine users maximum number to enter 

//let tweet = prompt('Please ENter Your Message');
//let tweetUnder280 = tweet.slice(0, 280);
//alert(tweetUnder280);

//Class Work
//Change the first letter of a name to capital letter

//solution 

//let firstLetterCapital = prompt('Please Enter Your Name');

//alert(firstLetterCapital.toLocaleUpperCase());
   

//function BMICalculator(){
  //let Weight = document.getElementById('W').value;
  //let Height = document.getElementById('H').value;
  //let heightSquare = Height*Height

  //let BMI = Weight/heightSquare
  //document.getElementById('Ans').value = BMI
//}

//JavaSceipt Level 2(intermediate)

//let n = Math.random();

//n = n*6

//n = Math.floor(n) + 1; //adding 1 is yo ensure that we have 6

//console.log(n);


//classWork LoveCalculator 


//let yourName = prompt('What is your name?')

//let herName = prompt('What is her name?')

//let loveScore = Math.random() *100;

//loveScore = Math.floor(loveScore);

//alert('The love score for ' + yourName + ' and ' + herName + ' is ' + loveScore + '%');
 
//if (loveScore <=30 ){
  //alert('This Lovers are Not Compatible please rethink on this relationship');
 //}

 //else if  (loveScore  > 30 && loveScore <= 50){
  //alert('The magic is there ' + yourName + ' and ' + herName + ' need more work to make this a sweet ending love story');
 //}

 //else {
  //alert('Magnificient ' + yourName + ' and ' + herName + ' are a love birds');
//}
   
//var guestList= ['Ade', 'Tayo', 'Sarah', 'Henry', 'Happy', 'Fisayo', 'Seyi'];

//var guestListCheck= prompt('Welcome please give me your name to confirm you are invited');

//if(guestList.includes(guestListCheck)){
  //alert('Welcome you are very welcome to my wedding ' + guestListCheck)
//}
//else{
  //(alert('You are not schedule to be on duty ' + guestListCheck)) 
//};

// A code that randomly select who buy lunch 

//function whoBuyLunch(names){
  //let numberOfPersons = names.length

  //let selectedPerson = Math.floor(Math.random()*numberOfPersons);

  //let randomPerson = names[selectedPerson];

  //return randomPerson  + ' is going to be us lunch today';
//}
//let possibleBuyer = ['Abey', 'Seyi', 'Akin', 'Sheriff', 'Moses', 'Richard', 'Ganiyu', 'Wahab', 'Shadrach', 'Fisayo']

//console.log(whoBuyLunch(possibleBuyer));

// Fibonacci Logic

//function numberGenerator (n){
  //let output = [];

  //if(n==1){
    //output = [0]

  //}

  //else if (n==2){
    //output = [0, 2]
  //}

  //else{
    //output = [0, 1, 1];

  //for(let i = 2; i < n; i++){
     // output.push()
  //}
    
  //}
//}

 



 




