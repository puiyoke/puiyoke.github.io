
let form = document.querySelector('#form');

form.onsubmit = function(event)
{	
	event.preventDefault();
	const mssgPage = 'https://puiyoke.github.io/disappearing_chat/message.html';
	let imgUrl = document.querySelector('#image-url').value;
	let mssg = document.querySelector('#message').value;
	let newLink = document.querySelector('#new-link');
	newLink.innerHTML = mssgPage + '?img-url=' + imgUrl + '&msg=' + mssg;

}

