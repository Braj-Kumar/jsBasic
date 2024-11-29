// console.log('hello');

// let rectangle={
// 	length:1,
// 	width:2,

// 	draw: function(){
// 		console.log('draw a rectangle');
// 		// draw.rectangle;
// 	}
// };

// let man={
// 	height:6.1,
// 	weight:54,

// 	other:{age:20, color:'black', behavior:'good'},
// };

// factory function
// function createrecangle(){
// 	return rectangle = {
// 		length:1,
// 		wudth:2,

// 		draw(){
// 			console.log('draw a rectangle')
// 		}
// 	};
	
// };
// console.log(createrecangle());
// let newobj = createrecangle();
// console.log(newobj);

// factory function in javascript

// function createrecangle(len,wid){
// 	return rectangle = {
// 		length:len,
// 		width:wid,
// 		draw(){
// 			console.log('create a rectangle');
// 		}
// 	};
// }
// let newobj = createrecangle(2,7);
// let newobj2 = createrecangle(9,6);
// console.log(newobj2);
// console.log(newobj);

// constructor function

// pascle notation-> first letter of every is capital

// new keyword-> to create an object from a constructor function we use the new keyword

// this keyword-> this keyword is used in a constructor function this refers to the object when the object is created

// function person(fname,lname,Agee)
// {
// 	this.Fname=fname,
// 	this.Lname= lname,
// 	this.age = Agee

// }
// let person1 = new person('abhi','raut',20);
// let person2 = new person('krishna', 'singh',25);

// for person 1
// console.log(person1);
// console.log(person1.Fname);
// console.log(person1.Lname);
// console.log(person1.age)

// for person2
// console.log(person2);

// console.log(person2.Fname);
// console.log(person2.Lname);
// console.log(person2.age);



//  new constructor function

// function Address(country, state, district, Ps){
// 	this.desh=country,
// 	this.rajya=state,
// 	this.jila=district,
// 	this.thana=Ps
// };
// console.log(Address);

// let Address1 = new Address('India','Bihar','Darbhanga','Manigachhi');
// console.log(Address1);

// console.log(Address1.desh);
// console.log(Address1.rajya);
// console.log(Address1.jila);
// console.log(Address1.thana);

// object create using Address1


// primitive types
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let nam = "braj";
// let Anam = nam;
// nam = "abhi";
// console.log(nam);
// console.log(Anam);

// reference types

// let c={value:10};
// let d=c;
// c.value++;
// console.log(c.value);
// console.log(d.value);

// let person12 ={
// 	naam:'kumar',
// 	age:19,
// }
// let person11 = person12;

// person11.naam= 'raut';
// person11.age=28;

// console.log(person12);
// console.log(person11);

// let a = 10;
// function inc(a){
// 	a++;
// 	console.log(a);
// }
// inc(a);
// console.log(a);


// pass by value

// let a=10;
// let b=20;
// function PassByValue(a,b){
// 	let temp=a;
// 	a=b;
// 	b=temp;
// 	console.log(`inside the function ${a}, ${b}`);
// }

// console.log(`before calling the function ${a}, ${b}`);



// call the function or invoked the function
// PassByValue(a,b)
// console.log(`after calling the function ${a}, ${b}`);


// pass by reference 

// let obj ={
// 	a:10,
// 	b:20
// };

// function PassByReference(obj){
// 	let temp = obj.a;
// 	obj.a=obj.b;
// 	obj.b=temp;
// 	console.log(`Inside the function ${obj.a} and ${obj.b}`); 
// }

// console.log(`befor calling the function ${obj.a} and ${obj.b}`);


// call the function or invoked the function
// PassByReference(obj);
// console.log(`after calling  the function ${obj.a} and ${obj.b}`);


// for in loop

// let rectangle ={
// 	length:4,
// 	width:2
// }

// for in  loop

// for(let key in rectangle){
	// keys are reflected through key
	// values are reflected through rectangle[key]
// 	console.log(key,rectangle[key]);
// }

// if ('color' in rectangle){
// 	console.log('present');

// }
// else{
// 	console.log('absent');
// }


// object clonnoing


// object clone#1
// let src = {
// 	a:10,
// 	b:20,
// 	c:30
// }

// let dest = {};

// for (let key in src){
// 	dest[key]=src[key];
// }
// console.log(dest);

// object clone#2

// let src = {
// 	a:10,
// 	b:20,
// 	c:30
// };
// let src2 ={value:40};

// let dest = Object.assign({}, src,src2);
// console.log(dest);

// src.a++;
// console.log(src);

// #object clonning 3

// let src = {
// 	a:10,
// 	b:20,
// 	c:30
// };
// let dest ={...src}
// console.log(dest);

// function math(Math){
// 	return Math.E;
// };
// console.log(Math.E);


// let obj = {
// 	math:'j'
// };
// console.log(Math.E);

// let date = new Date();

// let date1 = new Date(2003 ,11,2 , 7 , 15);
// console.log(date1);

// let date2 = new Date("December 2 2003 7:15");
// console.log(date2); 


// let num = [1,2,3,45,5];
// console.log(num);