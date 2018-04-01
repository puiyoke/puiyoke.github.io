let runBttn = document.querySelector('#run-bttn');
let count = 0

	runBttn.onmouseenter = function(event){
		if(count < 9){
		event.preventDefault();
		let top = Math.random()*500;
		let left = Math.random()*500;
		runBttn.style.marginTop = top + 'px';
		runBttn.style.marginLeft = left + 'px';
		runBttn.innerHTML = 'nope!'
		count++
		} else {
			runBttn.innerHTML = 'I give up! Click me to play again!'
		}

	runBttn.onclick = function(event){
		location.reload()
	}	
	}
