let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset +1000;
    if(offset > 3000){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slider-prew').addEventListener('click', function(){
    offset = offset -1000;
    if(offset < 0){
        offset=3000;
    }
    sliderLine.style.left = -offset + 'px'
})