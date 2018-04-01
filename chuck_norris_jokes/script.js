let joke = document.querySelector('#joke')
let icon = document.querySelector('#icon')
let movieBttn = document.querySelector('#movie-bttn')
let foodBttn = document.querySelector('#food-bttn')
let animalBttn = document.querySelector('#animal-bttn')
let sportBttn = document.querySelector('#sport-bttn')
let tags = ['movie','food','animal', 'sport']
let i = 0

console.log(tags)
icon.src = ("https://assets.chucknorris.host/img/avatar/chuck-norris.png")


function getTags(i) {fetch('https://api.chucknorris.io/jokes/random?category=' + tags[i])
.then(function(response){
	return response.json();
}).then(function(json){
	console.log(json);
	joke.innerHTML = json.value
})
}


movieBttn.onclick = function(){
	getTags(0);
}

foodBttn.onclick = function(){
	getTags(1);
}

animalBttn.onclick = function(){
	getTags(2);
}


sportBttn.onclick = function(){
	getTags(3);
}