//Slider Images
let sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector('#arrow-left'),
	arrowRight = document.querySelector('#arrow-right'),
	current = 0;

//Clear all images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
	}
}

//Initialized slider
function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
}

//Show previous
function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

//Show next
function slideRight(){
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = sliderImages.length;
	}
	slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', function(){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
});

startSlide();

//navigation bar effects
window.addEventListener("scroll", function(){
	var nav = document.querySelector("navbar");
	nav.classList.toggle("sticky", window.scrollY > 0);
});

//login account
function toggleForm(){
	var container = document.querySelector('.createAcc-container');
	container.classList.toggle('active');
}

//video effects
function videoUrl(hmmmmmm){
	document.getElementById("slider").src = hmmmmmm;
}