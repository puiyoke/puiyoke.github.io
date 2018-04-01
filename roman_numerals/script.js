

let submit = document.querySelector('#submit-bttn')
submit.onclick = function() {

	let decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	let roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	let romanized = '';
	let input = document.querySelector('#user-input')
	let output = document.querySelector('#output')
	let num = input.value;

	if(input.value == ''){
			window.alert('Please insert a valid number.')
		} else if(input.value == 0){
			window.alert('Please insert a valid number.')
		} else {
			console.log('ok')
		}


	for (let i = 0; i < decimal.length; i++) {
		while (decimal[i] <= num) {
		romanized += roman[i];
		num -= decimal[i];
		}
	}
		output.innerHTML = romanized;
		input.value = '';
}



/*my first lousy code

let roman = ['I','IV','V','IX','X'];
let number = ['1','4','5','9','10'];
let result = '';
let output = document.querySelector('#output');



	function romanConverter(num){
			if(num < 4){
				for(let i = 0 ; i < num; i++){
					result += roman[0];
					output.innerHTML = result;
				} 
			} else if(num == 4){
				result = roman[1];
				output.innerHTML = result;
			} else if(num == 5){
				result = roman[2];
				output.innerHTML = result;
			} else if(num < 9){
				for(let i = 0 ; i < num-5; i++){
					result += roman[0];
					output.innerHTML = 'V' + result;
				}
			} else if(num == 9){
				result = roman[3];
				output.innerHTML = result;
			} else if(num == 10){
				result = roman[4];
				output.innerHTML = result;
			}
	}

romanConverter(8)
*/