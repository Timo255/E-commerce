let auto = true;
let intervalTime = 5000;
let slideInterval;



const prevSlider = document.querySelector('.left-arrow')
prevSlider.addEventListener('click',(e)=>{
    prevSliderImg();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlderImg, intervalTime);
    }
})

const nextSliders = document.querySelector('.right-arrow');
nextSliders.addEventListener('click', (e)=>{
    nextSlderImg();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlderImg, intervalTime);
    }
});

function nextSlderImg(){
    const slide = document.querySelectorAll('.slide');
    const current = document.querySelector('.current');
    
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slide[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

function prevSliderImg(){
    const slide = document.querySelectorAll('.slide');
    const current = document.querySelector('.current');

    current.classList.remove('current')
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        slide[slide.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

function autoSlide(){
    if(auto){
        slideInterval = setInterval(nextSlderImg, intervalTime);
    }
}
autoSlide();