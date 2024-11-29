// console.log('hello');

// function declaration 

function run(){
	console.log('running');
	
}

// function call or invoked
run();

// function assignment

// let walk = function stand(){
// 	console.log('standing');

// }
// walk();

// let jump = walk;
// jump();

//annonyms functio  assignment

let stand = function (){
	console.log('walking');

}
stand();

// function sum(a,b){
// 	return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(1));

// console.log(sum());
// console.log(sum(1,2,3,5));



// function sum(a,b){
// 	console.log(arguments);
// 	return a+b;
// }

// let ans = sum(1,2,3,'d');
  
// function sum(a,b){
// 	let total = 0;
// 	for (let value of arguments)
// 		total = total+value;

// 		return total;
	
// }

// let ans = sum(1,2,3,5,5);
// console.log(ans);
 
// function sum(...arg){
// 	console.log(arg);
// }
// sum(1,2,3,4);

// function sum(num,value,...arg){
// 	console.log(arg);
// }
// sum(1,2,3,4);

// function intrest(p,r,y){
// 	return p*r*y/100;
// }
// console.log(intrest(1000,10,5)); 

// function intrest(p,r=10,y=3){
// 	return p*r*y/100;
// }
// console.log(intrest(1000,undefined,8));

for(var i=0;i<10;i++){

	console.log(i);
}