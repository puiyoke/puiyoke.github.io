
const lightBox = document.getElementById('lightbox')
const closeBttn = document.querySelector('.lightbox-close')
const galleryItem = document.querySelectorAll('.gallery-item')
const lightBoxImage = document.querySelector('.lightbox-image')

closeBttn.onclick = function(event){
	event.preventDefault();
	lightBox.classList.add('hidden');
}

for(let i = 0; i < galleryItem.length; i++){
	let item = galleryItem[i];
	item.onclick = function(event){
	event.preventDefault();
	lightBox.classList.remove('hidden');

	const elementClickedOn = event.target
	const galleryItemParent = elementClickedOn.parentElement;
	lightBoxImage.innerHTML = galleryItemParent.innerHTML
	console.log(lightBoxImage)
	}
}

