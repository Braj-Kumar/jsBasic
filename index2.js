// premitive type 

// let a=10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// by reference

// let d ={value:10};
// let e=d;
// d.value++;
// console.log(d.value );
// console.log(e.value);


// let a=10;
// function inc(a){
// 	a++;
// }
// inc(a);
// console.log(a);


// let a={value:10};
// function inc(a){
// 	a.value++;
// }
// inc(a);
// console.log(a.value);

//  for in  loop

// let rectangle = {
// 	length:2,
// 	breadth:1,

// };
// for-in loop

// for(let key in rectangle){
	// keys are reflected through key variable
	// value are reflected through rectangle[key]
// 	console.log(key,rectangle[key]);
// }

// for-of loop

// for(let key of Object.keys(rectangle)){
// 	console.log(key);
// }

// for(let key of Object.entries(rectangle)){
// 	console.log(key);
// }

// object clonning #1

// let src ={
// 	a:10,
// 	b:20,
// 	c:30
// };
// let dest = {};
// for(let key in src){
// 	dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);
// console.log(src);

// object clonning #2

// let src = {
// 	a:10,
// 	b:20,
// 	c:30
// };
// let src2 = {value:24};
// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);  


// object clonning #3

// let src = {
// 	a:10,
// 	b:20,
// 	c:30
// };
// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);

// string

// let firstname = 'braj';
// let lastname = new String('kumar');

// let date = new Date();
// console.log(date);

// let date2 = new Date(2003,11,2,7);
// console.log(date2);


// let numbers = [1,3,5,67,2];
// console.log(numbers);

//  let courses = [
// 	{no:1, naam:'Love'},
// 	{no:2, naam:'babber'}
//  ];
//  console.log(courses);

//  console.log (courses.indexOf({no:1,naam:'love'}))

// callback function
// to find a course with the name of 'Love'

// let course = courses.find(function(course){
// 	return course.naam == 'Love';
// })

// console.log(course);

// let  num = [2,3,45,6,7,8];

// console.log(num);
// end
// num.pop();
// console.log(num);

// start
// num.shift();
// console.log(num);
// middle
// num.splice(1,1);
// console.log(num);

// emptying the array 

// let num1 = [1,2,3,5];
// let num2 = num1;

// #1st
// num1.length = 0;

// #2nd
// num1.splice(0,num1.length);
// console.log(num1);
// console.log(num2);

// combinning & slicing arrays

// combinning
// let first = [1,2,3];
// let second = [5,6,7];
// let combined = first.concat(second);
// console.log(combined);

// slicing

// let sliced = combined.slice(2,3);
// console.log(sliced);

// let marks = [10,20,30,40,50,60,70,80];
// let slicedd = marks.slice();
// let slicedd = marks.slice(2)
// let slicedd = marks.slice(2,6);
// console.log(slicedd);

// let first = [1,2,3];
// let second = [4,5,6];
// let combined = [...first,'a',false, ...second,'b',true];
// console.log(combined);


// #joining array

// let num = [10,20,30,40];
// let joined = num.join(',');
// console.log(joined);

// let message = 'this is my 1st msg';
// let parts = message.split(' ');
// console.log(parts);

// let joinedd = parts.join('_')
// console.log(joinedd);

// sorting array

// something is wrong

// let numm = [122,45,7,8,89,900];
// numm.sort();
// console.log(numm);

// filttering of array

// let numbers =[1,2,4,-59,0,-5];
// let filltered = numbers.filter(value=> value > 0);

// console.log(filltered);

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// let items = numbers.map(value=> 'student_no.'+value);

// console.log(items);