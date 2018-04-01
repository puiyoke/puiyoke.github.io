

submit.onclick = function(event){
	event.preventDefault();

	let input = document.querySelector('#user-input');
	let submit = document.querySelector('#submit');
	let list = document.querySelector('#list');
	let listItem = document.createElement('li');
	let closeBttn = document.createElement('button');
	let editBttn = document.createElement('button');

	list.appendChild(listItem);
	list.appendChild(closeBttn);
	list.appendChild(editBttn);
	closeBttn.innerHTML = 'delete'
	editBttn.innerHTML = 'edit'
	listItem.innerHTML = input.value;
	input.value = '';

		editBttn.onclick = function(){
		let promptInput = prompt('Edit');
		listItem.innerHTML = promptInput;
	}
	
	closeBttn.onclick = function(){
		listItem.style.display = 'none'
		editBttn.style.display = 'none'
		closeBttn.style.display = 'none'
}


	}








