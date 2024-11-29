
// creatte array 

let num = [1,2,3,4,5];
console.log(num);

// add element at last index
num.push(15);
console.log(num);


// add element at first index
num.unshift(12);
console.log(num);

// add element at any index
num.splice(2,0,'a','b');
console.log(num);

// searching
console.log(num.indexOf(3));

// we want to check if a number exist in an array

if(num.indexOf(2) != -1){
	console.log("present");
}

else{
	console.log("absent");
}

console.log(num.includes(4));

console.log(num.indexOf(4, 1));

let courses = [
	{no:1, naam:'braj'},
	{no:2, naam:'kumar'}
];

console.log(courses);


// callback function
// let course = courses.find(function(course){
// 	return course.naam === 'braj';
// })

// arrow function

let course = courses.find(course => course.naam ==='braj');


console.log(course);
 

let num2 = [1,2,4,5,7,8];
// delete element at last index

console.log(num2.pop());

console.log(num2);

// delete element at first index

console.log(num2.shift());
console.log(num2);

// delete element at any index

console.log(num2.splice(2,1));

console.log(num2);

// emptying an array

let number = [1,2,3,4,5];
let number2=number;

// number.length = 0;
number.splice(0,number.length);
console.log(number);
console.log(number2);

// while(number.length>0){
// 	number.pop();
// }
// console.log(number);
// console.log(number2);

// combining

let first = [1,2,3,4];
let second = [5,6,2,4];
let combined = first.concat(second);
console.log(combined);

// slicing 

let third = [2,3,4,5,34,77,0,8];

// full sliceeing
let slicedd = third.slice();
let sliced = third.slice(2,4);
console.log(sliced);
console.log(slicedd);

// spread operator

let a1 = [1,2,4,5,7];
let a2 = [2,4,7,9,0];

let combin = [...a1,...a2];
console.log(combin);

// copy kaise banaye

let another = [...combin];
console.log(another);

// let x1 = {
// 	naam:'braj',
// 	class:'cse'
// }
// let x2 = {
// 	naam:'kumar',
// 	class:'ece'
// }

// let x3 ={...x1, ...x2};
// console.log(x3);

// for of loop

let b =[10,20,30,40];
for(let value of b){
	console.log(value);
}
// for each loop

b.forEach(function(numberrr){
	console.log(numberrr);
})

// joined
let cd = [10,20,30,40];
let joined = cd.join(',');
console.log(joined);

// spilit

let ddd = 'this is my message';
let parts = ddd.split(' ');

console.log(parts);

// sorting
let xy = [304,48,39,0,20];

console.log(xy.sort());

// filtering array
let z =[1,2,-2,-4,0];
let filterd = z.filter(function(value){
	return value>=0;
})
console.log(filterd);


let t = [1,2,3,5,7];
console.log(t);

let items = t.map(function(value){
	return 'student_no'+value;
})
console.log(items);


let f = [1,2,-4,-6];
let filtered = f.filter(function(value){
	return value>=0;
})
let itemss = filtered.map(function(num){
	return {value:num}
});
console.log(itemss);