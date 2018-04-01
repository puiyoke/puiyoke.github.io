
const list = document.getElementById('list-data');
let tags = ['dog','shoes','flower', 'grafitti'];


for(let i = 0; i < 1; i++){
	let i = Math.floor(Math.random()*tags.length)
	let randomTag = tags[i]
	random()
	getTaggedPhotos(randomTag)

	function random(){
		let array = []
		while(array.length < 4){
		let randomNumber = Math.floor(Math.random()*4);
			if(array.includes(randomNumber)) {
			continue;
			} else
			array.push(randomNumber);
			let buttonArea = document.getElementById('button-area')	
			let button = document.createElement('button');
			buttonArea.appendChild(button);
			button.innerHTML = tags[randomNumber];

			if(button.innerHTML == randomTag){
				button.onclick = function(event){
					event.preventDefault();
					window.alert("Yeah! Let's play again!")
					location.reload();
					}
					} else {
					button.onclick = function(event){
					event.preventDefault();
					window.alert("Try again!")
					}
			}

		}

	}

}
	

function getTaggedPhotos(tag){


	fetch('https://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=4pthIEBWTw5dULfX3EKlwf5WYoza73LhHzAHULWWq5wzIOYejx')
	.then(function(response){
		if(!response.ok){
			window.alert('Hey, seems like something went wrong, please contact <email address>.')
				return;
		}
		return response.json();
	})
	.then(function(result){
		if(!result){
			return;
		}


	list.innerHTML = '';
	const items = result.response;

	for(let i =0; i < items.length; i++){
		const item = items[i];

		if(item.photos != undefined){
			const altSizes = item.photos[0].alt_sizes
			const imgSrc = altSizes[altSizes.length - 3].url;
			const img = document.createElement('img');
			img.src = imgSrc;
			const li = document.createElement('li');
			li.appendChild(img);
			list.appendChild(li);
			}

		}
})

		.catch(function(err){
		window.alert('Something went wrong with Tumblr API, please try again later.')
	})
}
