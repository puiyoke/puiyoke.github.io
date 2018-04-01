let url = new URL(document.location.href);
let params = new URLSearchParams(url.search);
let img_url = params.get('img-url');
let msg = params.get('msg');


let userImg = document.querySelector('#user-img');
let userMssg = document.querySelector('#user-mssg');

userImg.src = img_url;
userMssg.innerHTML = msg;


function hideMessage()
{
	setTimeout(function(){
		userImg.classList.add('hidden');
		userMssg.classList.add('hidden');
	} , 10000);

}

function openWindow()
{
	setTimeout(function(){
		window.alert('Send a new message!'); window.location ="disappearing_chat.html"
	} , 11000);
}

let timeleft = 10;
let timer = setInterval(function(){
    timeleft--;
    document.querySelector('#timer').innerHTML = timeleft;
    if(timeleft <= 0)
    clearInterval(timer);
	},1000);

hideMessage();
openWindow();