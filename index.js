// document.addEventListener('DOMContentLoaded',() => {
//     console.log ('DOMLoaded')
// });
// document.querySelector('input').addEventListener('click',()=>{

// })

// const url ='https://www.googleapis.com/books/v1/volumes?q=search+terms'

// function getBooks () {
// 	fetch(url).then((data)=>{
// 		return data.json();
// 	}).then((completedata)=>{
// 		let data1 = "";
// 		completedata.map((values)=>{
// 			data1 = `<div class="description">
// 			<p class="title">${values.title}</p>
// 			<p class="id">${values.id}</p>
// 			<p class=" publishedDate">${values.publishedDate}</p>
// 		</div>`
// 		})
// 		document.getElementsByClassName("description").innerHTML=data1;
// 	}).catch((err)=>{
// 		console.log(err);
// 	})
// }
// console.log(getBooks());

function fetchBooks() {
	// To pass the tests, don't forget to return your fetch!
	let book = fetch('https://anapioficeandfire.com/api/books')
	.then(resp => resp.json())
	.then(json => renderBooks(json))
	 return book;
  }
  
  function renderBooks(books) {
	const box = document.querySelector('box');
	books.forEach(book => {
	  const title = document.createElement('title');
	  title.innerHTML = book.name;
	  box.appendChild(description);
	});
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	fetchBooks();
  });