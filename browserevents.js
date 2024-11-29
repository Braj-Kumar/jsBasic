// function events(){
// 	console.log('very good');

// }
// document.addEventListener('click', events);

// function sync(){
// 	console.log('first');
// }
// sync();

// console.log('second'); 

// setTimeout(function(){
// 	console.log("third");
// },3000);
// function sync(){
// 	console.log("first");
// }
// sync();
// console.log("second");

// let meraPromise1 = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log('I am inside promise1')
// 	},5000);

// 	resolve(2003);

	// reject(new Error('bhaisahab error aa gaya'))
// });

// meraPromise1.then((value) => {console.log(value)});

// meraPromise1.catch((error) => {console.log("recieved an erroe")});

// let meraPromise2 = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log('I am inside promise2');
// 	},3000);

// 	resolve(2002);
// })

// console.log('pehla');

// let wadaa1 = new Promise(function(resolve,reject){
// 	setTimeout(()=> {
// 		console.log("setTimeout1 started");
// 	},2000);
// 	resolve(true);
// })

// let output = wadaa1.then(()=>{
// 	let wadaa2 = new Promise(function(resolve,reject){
// 		setTimeout(() => {
// 			console.log("settimeout2 started");
// 		},3000)
// 		resolve("wadda 2 resolved");
// 	})

// 	return wadaa2;
// })
// output.then((value) => console.log(value));

//  async function abcd(){
// 	return "kya hua tera wada"
//  }
//  console.log(abcd);

// async function

// async function utility(){

// 	let delhiMausam = new Promise((resolve,reject)=>{
// 		setTimeout(function(){
// 			resolve("Delhi me bahut garmi hai");
// 		},5000);
// 	});

// 	let punMausam = new Promise((resolve,reject) => {
// 		setTimeout(()=>{
// 			resolve("punjab me jaida gamri hai");
// 		},6000);
// 	});

// 	let dM = delhiMausam;
// 	let pM = punMausam;

// let dM = await delhiMausam;
// let pM = await punMausam;

// 	return [dM,pM];
// }

// utility();


// Another promise code

// let merawadda = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log("kya hua tera wada");
// 	},5000);

// 	resolve(2023);
// 	// reject((new Error("wada tut gaya")));
// })



// console.log("Pehla hi complete nhi hua hai");


// fetch API

// let content = fetch('https://jsonplaceholder.typicode.com/posts/1');

// async function utility(){
// 	let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	let output = await content.json();
// 	console.log(output);
// }

// utility(); 


async function helper(){

	
	let option = {
		method: 'POST',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	};
	
	let content = await fetch('https://jsonplaceholder.typicode.com/posts', option);
	let response = content.json();
	return response;
	
};

async function utility(){
	let ans = await helper();
	console.log(ans);
}