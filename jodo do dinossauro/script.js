const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping  = false;
let position = 0;
//evento da tecla espaço
function handlekeyup(event) {
	if (event.keyCode === 32) {
		if(!isjumping ) {
			jump();
		}
	}
}
//Pulo do dinossauro
function jump() {
		isjumping = true;

		let upinterval = setInterval(()=>{
			if (position >= 170) {
			clearInterval(upinterval);

			//descendo
			let downInterval = setInterval(()=>{
				if (position <= 0 ) {
					clearInterval(downInterval);
					isjumping = false;
				}else{
					position -= 20;
					dino.style.bottom = position + 'px';
				}
			},20);
		}else{
			//subindo
			position += 20;
			dino.style.bottom = position + 'px';
		}
	},20);
}
//Cactus
function createCactus() {
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let randomTime = Math.random() * 4000;

	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);

	let leftinterval = setInterval(() => {
		if (cactusPosition < -60) {
			clearInterval(leftinterval);
			background.removeChild(cactus);
		}else if (cactusPosition > 0 && cactusPosition < 60 && position< 60 ){
			//gamer over
			clearInterval(leftinterval);
			document.body.innerHTML = '<h1 class="game-over">Fim de Jogo.<br><br>Não foi dessa vez.<br><br> Aperte o play e continue jogando<br><br><br><a href="file:///D:/dino/index.html"<button class="button_play">PLAY</button></a></h1>';
			
		}else{
			cactusPosition -= 10;
			cactus.style.left = cactusPosition + 'px';
		}
	},30);
	setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup',handlekeyup);
