// // console.log('hello')

// // function declaration
// function run(){
// 	console.log('running');
// }
// // call or invoke the function

// run();


// // function assignment


// // named function assignment 
// let stand = function walk(){
// 	console.log('walking')
// }

// let jump = stand;
// jump();

// stand();

// // Annonymous function Assignment 
// let stand2 = function(){
// 	console.log('jumping');
// }
// stand2();


// function sum(a,b){
// 	let total = 0;
// 	for(let value of arguments)
// 		total=total+value;
// 		return total;

// }
// let ans = sum(1,2,4,5);
// console.log(ans);


// function sum2(c,d){
// 	console.log(arguments);
// }

// let anss=sum2(3,4,84,94);
// console.log(anss);


// function sum3(num,value,...arg){
// 	console.log(arg);
// }
// sum3(1,2,3,4,5,6,6)

// // dafault parameter

// function interest(p,r=5,y=10){
// 	return p*r*y/100;
// }
// console.log(interest(1000,5,10));

// function summ(a,b) {
// 	console.log(arguments);
	
// }
// let ansss = summ(1,2,4,5,6);
// console.log(ansss);


// let person = {
// 	fName:'braj',
// 	lName:'kumar'
// }

// function fullname(){
// 	return `${person.fName} ${person.lName}`;
// }
// console.log(fullname());

// let person = {
// 	fName:'braj',
// 	lName:'kumar',

// 	get fullname(){
// 		return `${person.fName} ${person.lName}`;
		
// 	},

// 	set fullname(value){
// 		let parts = value.split(' ');
// 		this.fName = parts[0];
// 		this.lName = parts[1];
// 	}
// }

// try{

// 	person.fullname = 'rahul raj';
// }
// catch(e){
// 	alert('yor are giving a number');
// }
// console.log(person.fullname);

// let arr = [1,3,4,6,6];

// let total=0
// for(let value of arr){
// 	total=total+value;
// }
// console.log(total);

