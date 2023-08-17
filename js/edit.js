var rocket = document.querySelector('#rocket');
var manJump = document.querySelector('#man-jump');
var moon = document.querySelector('#Moon');

function animate() {
	Velocity(rocket, {
		top: '20px',
		rotateZ: '5deg'
	}, {
		duration: 7000
	});

	Velocity(rocket, {
		rotateZ: '15deg'
	}, {
		duration: 7000
	});

	Velocity(rocket, {
		left: '30%',
		rotateZ: '0deg'
	}, {
		duration: 7000
	});

	Velocity(manJump, {
		opacity: 1
	}, {
		delay: 13000,
		duration: 1000
	});

	Velocity(manJump, {
		top: '310px'
	}, {
		queue: false,
		delay: 17000,
		duration: 12000
	});

	Velocity(moon, {
		left: '25%'
	}, {
		duration: 12000
	});
}

animate();

console.log('Velocity function called');

const btnPublish = document.querySelector('.publish-btn.news');
const cardPopUp = document.querySelector('.card-popup');
const closePop = document.querySelector('.close');

btnPublish.addEventListener('click', function () {
	cardPopUp.classList.add('active');
});

closePop.addEventListener('click', function () {
	cardPopUp.classList.remove('active');
});
