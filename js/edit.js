
	const rocket = document.querySelector('#rocket');
	const manJump = document.querySelector('#man-jump');
	const moon = document.querySelector('#Moon');  
	function animate() {
	  Velocity(rocket, {
		top: '50px',
		// left: '40%',
		rotateZ: '5deg'
	  }, {
		duration: 7000
	  }),

	  Velocity(rocket,{
		// left:'40%',
		rotateZ:'15deg'
	  },{
		duration:7000
	  }),
	  Velocity(rocket,{
		left:'40%',
		rotateZ:'30deg'
	  },{
		duration:7000
	  }),


	  Velocity(manJump,{
		opacity:1
	  },{
		delay:13000,
		duration:1000
	  }),
	   Velocity(manJump,{
		top:400,
	  },{
		queue:false,
		delay:17000,
		duration:12000
	  }),

	  Velocity(moon,{
		left:'35%'
	  },{
		duration:12000
	  })
	}
  
	animate();
  
	console.log('Velocity function called');

  

	const btnPublish = document.querySelector('.publish-btn.news');
	const cardPopUp = document.querySelector('.card-popup');
	const closePop = document.querySelector('.close');

      btnPublish.addEventListener('click',function(){
		cardPopUp.classList.add('active');
	  })

      closePop.addEventListener('click', function() {
        cardPopUp.classList.remove('active');
      });


	  

    